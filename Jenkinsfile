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
            emailext(
                to: 'mosaddekamallick@gmail.com',  // Replace with your default email address
                body: 'A Test EMail',
                recipientProviders: [
                    [$class: 'DevelopersRecipientProvider'],
                    [$class: 'RequesterRecipientProvider']
                ],
                subject: 'Test'
            )
        }
    }
}
