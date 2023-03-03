pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Install') {
            steps {
                bat 'npm install '
            }
        }
        stage('Run test') {

            stage('Desktop test') {
                        steps {
                            bat 'npm run cy:tests'
                        }
            }
            stage('Mobile test') {
                steps {
                            bat 'npm run cy:tests'
                        }
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
