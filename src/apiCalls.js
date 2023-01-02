const apiCall = () => {
    fetch(`http://localhost:3001/api/v1/tricks`)
        .then(response => response.json())
        .then(data => console.log(data))
        .then ((data) => {this.setState({tricks: data })})
}