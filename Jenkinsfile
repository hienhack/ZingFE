pipeline {
    agent {
        label 'nxc-hcmus-1'
    }

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                script {
                    if (env.BRANCH_NAME == 'main') {
                        withDockerRegistry(credentialsId: 'dockerhub-ngoxuanchien', url: 'https://index.docker.io/v1/') {
                            sh 'docker-compose build'
                            sh 'docker-compose push'
                        }
                    }
                } 
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                if (env.BRANCH_NAME == 'main') {
                    sh 'docker-compose rm -s -f'
                    sh 'docker-compose pull'
                    sh 'docker-compose up -d'
                }
            }
        }
    }
}