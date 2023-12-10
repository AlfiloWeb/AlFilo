@Library('standard-library@1.0') _

pipeline {
    agent {
        docker{
            image 'agent:1.0'
        }
    }
    environment {
        SSH_USER_PASS = credentials('sshcreds')
        HOST = credentials('host-stg')
        DOCKER_COMPOSE_DIR = '/home/GuildManager/Infrastructure/docker-compose/front' // Chose for what you need
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
        stage ('Test Builds'){
            steps {
                script {
                    dockerlib.buildTest("front")
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
    post{
        always{
            script{
                pga.cleanupWorkspace()
            }
        }
        failure{
            script{
                pga.slack_webhook()
            }
        }            
    }
}
