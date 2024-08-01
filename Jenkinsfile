pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Build App'
            }
        }
        stage('Test') {
            steps {
                echo 'Test App'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploy App'
            }
        }
    }
   post {
        always {
            emailext (
                subject: "Pipeline ${currentBuild.currentResult}: ${env.JOB_NAME} - Build #${env.BUILD_NUMBER}",
                body: """
                    Build #${env.BUILD_NUMBER} of ${env.JOB_NAME} completed with result: ${currentBuild.currentResult}.
                    
                    Check the build details at: ${env.BUILD_URL}
                """,
                to: 'mosaddekamallick@gmail.com'
            )
        }
    }
}

