import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, FlatList } from 'react-native';
import { booksFetch } from '../actions';
import { ListItem } from './ListItem';

class BooksList extends Component {
    componentWillMount = () => {
        this.props.booksFetch();

        this.createDataSource(this.props);
    }

    componentWillReceiveProps = (nextProps) => {
        this.createDataSource(nextProps);
    }

    createDataSource({ books }) {
        const ds = new ListView.DataSource({
          rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(books);
    }

    renderRow = (book) => {
        return <ListItem book={book} />
    }

    render = () => {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
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