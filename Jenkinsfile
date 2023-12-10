@Library('standard-library@1.0') _

pipeline {
    agent {
        docker{
            image 'agent:1.0' // donot touch
        }
    }
   environment {
        SSH_USER_PASS_PRD = "jenkins-prd"
        HOST_PRD = credentials ('host-alfilo-web')
        DOCKER_COMPOSE_DIR = '/home/alfilo/Infrastructure/docker-compose/front' // Chose for what you need
    }
    parameters {
        choice(name: 'ExecutionMode', choices: ['Verbose', 'Quiet'], description: 'Select the execution mode')
        choice(name: 'env', choices: ['STG', 'PRD'], description: 'Select the deployment environment')
    }
    stages {
        stage('Prepare SSH') {
            steps {
                script {
                    example.prepareSSH('PRD', '${HOST_PRD}')
                }
            }
        }
        stage('Stopping Container') {
            steps {
                script {
                    dockerlib.stopdockeralfilo()
                }
            }
        }
        stage('Build Container') {
            steps {
                script {
                    dockerlib.composedockeralfilo()
                }
            }
        }
    }
}
