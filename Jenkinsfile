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
        stage('Run tests') {
            steps {
                parellel(
                    Desktop test : {
                        bat 'npm run cy:tests'
                        echo 'echo running E2E Desktop tests'
                    },
                    Mobile test : {
                        bat 'npm run cy:tests'
                        echo 'echo running E2E Mobile tests'
                    }
                )
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
            }
        }
    }
}
