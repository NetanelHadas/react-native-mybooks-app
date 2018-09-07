import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { bookUpdate, bookCreate } from "../actions";
import { Card, CardSection, Input, Button } from './common';

class BookCreate extends Component {
    onButtonPress = () => {
        const { author_name, published_date, book_title, book_image } = this.props;
        
        this.props.bookCreate({ author_name, published_date, book_title, book_image });
    }

    render = () => {
        return (
            <Card>
                <CardSection>
                    <Input 
                        label="Author Name"
                        placeholder="Jk Rowling"
                        value={this.props.author_name}
                        onChangeText={text => this.props.bookUpdate({ prop: 'author_name', value: text})}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Published Date"
                        placeholder="1/1/1999"
                        value={this.props.published_date}
                        onChangeText={text => this.props.bookUpdate({ prop: 'published_date', value: text})}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Book Title"
                        placeholder="The Order of the Phoenix"
                        value={this.props.book_title}
                        onChangeText={text => this.props.bookUpdate({ prop: 'book_title', value: text})}
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Image link"
                        placeholder="www.image.com"
                        value={this.props.book_image}
                        onChangeText={text => this.props.bookUpdate({ prop: 'book_image', value: text})}
                    />
                </CardSection>

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