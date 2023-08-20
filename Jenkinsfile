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
    // trigger test
    parameters {
        booleanParam(name: 'Port_checking', defaultValue: false, description: 'Set to true to execute the script on the remote server')
    }

    environment {
        REMOTE_HOST = credentials('host-stg')
    }

    stages {
        stage('Clean Builders') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'creds2', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    script {
                        sshCommand remote: remote, command: "cd /home/alfilo/docker-compose/ && echo ${env.PASSWORD} | sudo -S docker builder prune --force"
                        sshCommand remote: remote, command: "cd /home/alfilo/docker-compose/ && echo ${env.PASSWORD} | sudo -S docker-compose down"
                        if (params.Port_checking) {
                            sshCommand remote: remote, command: "cd  /home/alfilo && ./kill.sh"
                        }
                    }
                }
            }
        }
        stage('Build Web') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'creds1', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    script {
                        sshCommand remote: remote, command: "cd /home/alfilo/docker-compose/ && echo ${env.PASSWORD} | sudo -S docker-compose build  --no-cache --quiet"
                        sshCommand remote: remote, command: "cd /home/alfilo/docker-compose/ && echo ${env.PASSWORD} | sudo -S docker-compose up -d"
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
