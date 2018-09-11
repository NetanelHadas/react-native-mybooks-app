import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input, MyDatePicker } from './common';
import { bookUpdate } from '../actions';

class BookForm extends Component {
    render = () => {
        return (
            <View>
                <CardSection>
                    <Input
                        label="Author Name"
                        placeholder="Jk Rowling"
                        value={this.props.author_name}
                        onChangeText={text => this.props.bookUpdate({ prop: 'author_name', value: text })}
                    />
                </CardSection>

                {/* <CardSection>
                    <Input
                        label="Published Date"
                        placeholder="YYYY-MM-DD"
                        value={this.props.published_date}
                        onChangeText={text => this.props.bookUpdate({ prop: 'published_date', value: text })}
                    />
                </CardSection> */}

                <CardSection>
                    <MyDatePicker 
                        label="Published Date"
                        placeholder="Select Published Date"
                        value={this.props.published_date}
                        onDateChange={text => this.props.bookUpdate({ prop: 'published_date', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Book Title"
                        placeholder="The Order of the Phoenix"
                        value={this.props.book_title}
                        onChangeText={text => this.props.bookUpdate({ prop: 'book_title', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Image link"
                        placeholder="www.image.com"
                        value={this.props.book_image}
                        onChangeText={text => this.props.bookUpdate({ prop: 'book_image', value: text })}
                    />
                </CardSection>

                
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { author_name, published_date, book_title, book_image, error } = state.bookForm;

    return { author_name, published_date, book_title, book_image, error };
}

export default connect(mapStateToProps, { bookUpdate })(BookForm);



