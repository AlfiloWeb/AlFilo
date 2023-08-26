pipeline {
    agent {
        label 'squaier'
    }
    environment {
        SSH_USER_PASS = credentials('sshcreds')
        HOST = credentials('host-stg')
        DOCKER_COMPOSE_DIR = '/home/alfilo/docker-compose/' // Chose for what you need
    }
    parameters {
        choice(name: 'ExecutionMode', choices: ['Verbose', 'Quiet'], description: 'Select the execution mode')
    }
    stages {
        stage('Prepare SSH') {
            steps {
                script {
                    sh 'pwd'
                    sh "mkdir ~/.ssh"
                    sh "echo 'Host *' >> ~/.ssh/config"
                    sh "echo '   StrictHostKeyChecking no' >> ~/.ssh/config"
                    sh "echo '   LogLevel ERROR' >> ~/.ssh/config"
                }
            }
        }
        
        stage('Stopping Container') {
            steps {
                script {
                    sshagent(credentials: ['jenkins2']) {
                        sh 'ssh $SSH_USER_PASS@$HOST "cd $DOCKER_COMPOSE_DIR && docker-compose down "'
                    }
                }
            }
        }
        
        stage('Build Container') {
            steps {
                script {
                    sshagent(credentials: ['jenkins2']) {
                        if (params.ExecutionMode == 'Verbose') {
                            sh 'ssh  $SSH_USER_PASS@$HOST "cd $DOCKER_COMPOSE_DIR && docker-compose build --no-cache && docker-compose up -d"'
                        } else if (params.ExecutionMode == 'Quiet'){
                            sh 'ssh  $SSH_USER_PASS@$HOST "cd $DOCKER_COMPOSE_DIR && docker-compose build --no-cache --quiet && docker-compose up -d"'
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
