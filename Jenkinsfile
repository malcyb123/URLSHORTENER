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
        stage('Send Test Email') {
            steps {
                emailext (
                    body: 'Jenkins email notification sent successfully!',
                    subject: 'Checking Jenkins Email Notification',
                    to: 'mosaddekamallick@gmail.com'
                )
            }
        }
    }
}

