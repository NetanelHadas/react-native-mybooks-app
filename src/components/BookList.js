import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, FlatList } from 'react-native';
import { booksFetch } from '../actions';
import ListItem from './ListItem';

class BooksList extends Component {
    componentWillMount = () => {
        this.createDataSource();
    }

    createDataSource() {
        this.props.booksFetch();
    }

    renderItem = (book) => {
        return <ListItem book={book} />
    }

    render = () => {
        return (
            <FlatList
                data={this.props.books}
                renderItem={this.renderItem}
                keyExtractor={book => book.uid}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const books = _.map(state.books, (val, uid) => {
        return { ...val, uid };
    });
    return { books };
};

// map puts all of these objects into an ARRAY (we had an object of objects before);

export default connect(mapStateToProps, { booksFetch })(BooksList);