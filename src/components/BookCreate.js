import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bookUpdate, bookCreate } from "../actions";
import { Card, CardSection, Button } from './common';
import BookForm from './BookForm';

class BookCreate extends Component {
    onButtonPress = () => {
        const { author_name, published_date, book_title, book_image } = this.props;
        
        this.props.bookCreate({ author_name, published_date, book_title, book_image });
    }

    render = () => {
        return (
            <Card>  
                <BookForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
  const { author_name, published_date, book_title, book_image, error } = state.bookForm;
  //const { user } = state.auth;
  
  return { author_name, published_date, book_title, book_image, error };
};

export default connect(mapStateToProps, { bookUpdate, bookCreate })(BookCreate);

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};