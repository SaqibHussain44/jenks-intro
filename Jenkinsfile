Jenkinsfile (Declarative Pipeline)
pipeline {
    agent { docker { image 'node:carbon' } }
    stages {
        stage('build') {
            steps {
                sh 'npm --version'
                sh 'echo "Hello World"'
            }
        }
    }
}