import React from 'react'

class DataFetcher extends React.Component {
  state = {
    loading: false,
    data: null
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch(this.props.url)
      .then(res => res.json())
      .then(data => this.setState({data: data.results, loading: false}))
  }

  render() {  

    const {data, loading} = this.state

    return(
      this.props.children({data, loading})
      )
  }
}

export default DataFetcher 