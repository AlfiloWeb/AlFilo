@Library('standard-library@main') _

pipeline {
    agent {
           label 'agent:1.0' //don't touch please
    }
    environment {
        SSH_USER_PASS = credentials('sshcreds')
        SSH_USER_PASS_PRD = credentials ('jenkins-prd')
        HOST = credentials('host-stg')
        HOST_PRD = credentials ('host-prd') // EXMAPLE
        DOCKER_COMPOSE_DIR = '/home/GuildManager/Infrastructure/docker-compose/front' // Chose for what you need
    }
    parameters {
        choice(name: 'ExecutionMode', choices: ['Verbose', 'Quiet'], description: 'Select the execution mode')
        choice(name: 'env', choices: ['STG', 'PRD'], description: 'Select the deployment environment')
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
                 sshagent(credentials: ['jenkins2']) {
                  sh '''
                      ssh $SSH_USER_PASS@$HOST "cd /home/GuildManager/Infrastructure/docker-compose/front/AlFilo && git pull"
                      '''
                    } 
                    dockerlib.buildDockerImage("front")
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
                    pga.cleanImages()
                }
            }
          failure{
               script{
                   pga.slack_webhook("web")
               }
          }
    }
}
