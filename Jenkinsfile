pipeline {
    agent any

    parameters {
        booleanParam(name: 'Port_checking', defaultValue: false, description: 'Set to true to execute the script on the remote server')
    }

    stages {
        stage('Test-build-stg') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'creds1', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
                    script {
                        def remote = [
                            name: 'test',
                            host: 'staging.alfilo.org',
                            user: env.USERNAME,
                            password: env.PASSWORD,
                            allowAnyHosts: true
                        ]
                        sshCommand remote: remote, command: "cd /home/alfilo/docker-compose && echo ${env.PASSWORD} | sudo -S docker-compose down"
                        sshCommand remote: remote, command: "cd /home/alfilo/docker-compose/ && sleep 10"
                        sshCommand remote: remote, command: "cd  /home/alfilo && ./kill.sh"
                        sshCommand remote: remote, command: "cd /home/alfilo/docker-compose && echo ${env.PASSWORD} | sudo -S docker system prune -a -f"
                        sshCommand remote: remote, command: "cd /home/alfilo/docker-compose && echo ${env.PASSWORD} | sudo -S docker-compose build  --no-cache --quiet"
                        sshCommand remote: remote, command: "cd /home/alfilo/docker-compose && echo ${env.PASSWORD} | sudo -S docker-compose up -d"
                    }
                }
            }
        }
    }

    post {
        always {
            // Clean workdir or perform other cleanup tasks
            sh 'exit'
            sh 'rm -rf *'
            sh 'ls -l'
        }
    }
}
