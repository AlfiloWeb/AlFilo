@Library('standard-library@1.0') _

pipeline {
    agent {
        docker{
            image 'agent:1.0' // donot touch
        }
    }
    environment {
        SSH_USER_PASS = "jenkins-prd"
        HOST = credentials('host-alfilo-web') //commit-for-test
        DOCKER_COMPOSE_DIR = '/home/alfilo/Infrastructure/docker-compose/front/' // Chose for what you need
    }
    parameters {
        choice(name: 'ExecutionMode', choices: ['Verbose', 'Quiet'], description: 'Select the execution mode')
    }
    stages {
        stage('Prepare SSH') {
            steps {
                script {
                    example.prepareSSH('STG', '${HOST}')
                }
            }
        }
        stage('Stopping Container') {
            steps {
                script {
                    dockerlib.dockerdown()
                }
            }
        }
        stage('Build Container') {
            steps {
                script {
                    dockerlib.buildContainer()
                }
            }
        }
    }
}
