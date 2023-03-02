pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Install ') {
            steps {
                bat 'npm install '
            }
        }
        stage('Test login') {
            steps {
                bat 'npm run test:login'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
