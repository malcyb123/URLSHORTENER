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
            script {
                def emailSubject
                def emailBody
                def recipientEmail

                if (currentBuild.result == "SUCCESS") {
                    emailSubject = "Pipeline Success: ${env.JOB_NAME} - Build #${env.BUILD_NUMBER}"
                    emailBody = "The pipeline run for ${env.JOB_NAME} - Build #${env.BUILD_NUMBER} was successful. You can view the details at ${env.BUILD_URL}"
                    recipientEmail = "mosaddekamallick@gmail.com"
                }
                else {
                    emailSubject = "Pipeline Failure: ${env.JOB_NAME} - Build #${env.BUILD_NUMBER}"
                    emailBody = "The pipeline run for ${env.JOB_NAME} - Build #${env.BUILD_NUMBER} has failed. You can view the details at ${env.BUILD_URL}"
                    recipientEmail = "mosaddekamallick@gmail.com"
                }

                emailext (
                    subject: emailSubject,
                    body: emailBody,
                    to: recipientEmail
                )
            }
        }
         }
}
