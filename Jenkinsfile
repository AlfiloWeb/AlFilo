pipeline {
    agent {
        docker{
            image 'agent:1.0' // donot touch
        }
    }
    environment {
        SSH_USER_PASS = "jenkins-prd"
        HOST = credentials('host-alfilo-web') //commit-for-test
        DOCKER_COMPOSE_DIR = '/home/GuildManager/Infrastructure/docker-compose/front/' // Chose for what you need
    }
    parameters {
        choice(name: 'ExecutionMode', choices: ['Verbose', 'Quiet'], description: 'Select the execution mode')
    }
    stages {
        stage('Prepare SSH') {
            steps {
                script {
                    sh "mkdir ~/.ssh"
                    sh "echo 'Host *' >> ~/.ssh/config"
                    sh "echo 'LogLevel ERROR' >> ~/.ssh/config"
                    sh "ssh-keyscan alfilo.org >> ~/.ssh/known_hosts"
                }
            }
        }

        stage('Stopping Container') {
            steps {
                script {
                    sshagent(credentials: ['jenkins-prd']) {
                        sh 'ssh $SSH_USER_PASS@$HOST "cd $DOCKER_COMPOSE_DIR && docker-compose down "'
                    }
                }
            }
        }

        stage('Build Container') {
            steps {
                script {
                    sshagent(credentials: ['jenkins-prd']) {
                        sh 'ssh  $SSH_USER_PASS@$HOST "cd $DOCKER_COMPOSE_DIR && docker build -t my-build-stage -f docker-helper --no-cache ."'
                        if (params.ExecutionMode == 'Verbose') {
                            sh 'ssh  $SSH_USER_PASS@$HOST "cd $DOCKER_COMPOSE_DIR && docker-compose build && docker-compose up -d"'
                        } else if (params.ExecutionMode == 'Quiet'){
                            sh 'ssh  $SSH_USER_PASS@$HOST "cd $DOCKER_COMPOSE_DIR && docker-compose build --quiet && docker-compose up -d"'
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
           // Trigger a new build of the same job
            build job: "Maintenance/PRD-alfilo/cleaning-all-layers", propagate: true, wait: false
        }
    }
}
