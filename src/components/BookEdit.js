import _ from 'lodash';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Confirm } from './common';
import BookForm from './BookForm';
import { bookUpdate, bookSave, bookSaveCancel, bookDelete } from "../actions";

class BookEdit extends Component {
    
    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.book, (value, prop) => {
            this.props.bookUpdate({ prop, value });
        });
    }

    componentWillUnmount() {
        this.props.bookSaveCancel();
    }

    onButtonPress = () => {
        const { author_name, published_date, book_title, book_image } = this.props;

        this.props.bookSave({ author_name, published_date, book_title, book_image, uid: this.props.book.uid })
    }

    onAccept = () => {
        const { uid } = this.props.book;

        this.props.bookDelete({ uid });
    }

    onDecline = () => {
        this.setState({ showModal: false });
    }

    render = () => {
        return (
            <Card>
                <BookForm />
                
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                
                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Delete Book
                    </Button>
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.props.error}
                </Text>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { author_name, published_date, book_title, book_image, error } = state.bookForm;

    return { author_name, published_date, book_title, book_image, error };
}

export default connect(mapStateToProps, { bookUpdate, bookSave, bookSaveCancel, bookDelete })(BookEdit);

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};