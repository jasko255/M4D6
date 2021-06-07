import {Component} from 'react'
import CommentList from './CommentList'


class CommentArea extends Component {

        state = {
            comments:[]
        }

        componentDidMount = async () => {
            try {
                let response = await fetch ('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin , {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNWM1ZGNlYWY0ODAwMTVjOTE5NDEiLCJpYXQiOjE2MjMwNzQzNzEsImV4cCI6MTYyNDI4Mzk3MX0.rVnzNrsnvKbrU4pU19NYKXIInjvv5PBZkWEAOTqkYTY'
                    }
                })
                console.log(response);
                let comments = await response.json()
                console.log('comments',comments);
                this.setState({comments: comments})
            } catch (error) {
                console.log(error);
                
            }
        }

    render() {
        return (
            <div>
                COMMENTAERA
                <CommentList commentsToShow={this.state.comments} />
            </div>
        );
    }
}

export default CommentArea;