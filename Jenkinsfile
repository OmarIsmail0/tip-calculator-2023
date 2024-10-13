pipeline {
    agent any

    stages {
        stage('Git-pull') {
            steps {
                git pull
            }
        }
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
    }
}
