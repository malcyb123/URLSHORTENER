pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            parallel {
                stage('Server') {
                    steps {
                        dir('server') {
                            sh 'npm install'
                        }
                    }
                }
                stage('Client') {
                    steps {
                        dir('client') {
                            sh 'npm install'
                        }
                    }
                }
            }
        }

        stage('Build') {
            parallel {
                stage('Server') {
                    steps {
                        dir('server') {
                            sh 'npm run build'
                        }
                    }
                }
                stage('Client') {
                    steps {
                        dir('client') {
                            sh 'npm run build'
                        }
                    }
                }
            }
        }

        stage('Test') {
            parallel {
                stage('Server') {
                    steps {
                        dir('server') {
                            sh 'npm test'
                        }
                    }
                }
                stage('Client') {
                    steps {
                        dir('client') {
                            sh 'npm test'
                        }
                    }
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: '**/target/*.jar', allowEmptyArchive: true
            junit '**/test-results/*.xml'
        }
    }
}
