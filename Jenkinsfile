def getRemoteConfig() {
    return [
        name: 'test',
        host: env.REMOTE_HOST,
        user: env.USERNAME,
        password: env.PASSWORD,
        allowAnyHosts: true
    ]
}

pipeline {
    agent any

    parameters {
        booleanParam(name: 'Port_checking', defaultValue: false, description: 'Set to true to execute the script on the remote server')
    }

    environment {
        REMOTE_HOST = credentials('host-stg')
    }

    stages {
        stage('Clean Builders') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'creds1', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    script {
                        echo 'Hello develop'
                        if (params.Port_checking) {
                            sshCommand remote: remote, command: "echo uwu.param"
                        }
                    }
                }
            }
        }
    }
    post {
        always {
            // Clean workdir or perform other cleanup tasks
            sh 'rm -rf *'
            sh 'ls -l'
        }
    }
}
