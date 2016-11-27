class EnhancedTableHead extends Component {
  static propTypes = {
    onRequestSort: PropTypes.func,
    onSelectAllClick: PropTypes.func,
    order: PropTypes.string,
    orderBy: PropTypes.string,
  };

  createSortHandler = (property) => {
    return (event) => this.props.onRequestSort(event, property);
  };

  render() {
    const { order, orderBy } = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell checkbox>
            <Checkbox onChange={this.props.onSelectAllClick} />
          </TableCell>
          <TableCell padding={false}>
            <TableSortLabel
              active={orderBy === 'name'}
              direction={order}
              onClick={this.createSortHandler('name')}
            >
              Dessert (100g serving)
            </TableSortLabel>
          </TableCell>
          <TableCell numeric>
            <TableSortLabel
              active={orderBy === 'calories'}
              direction={order}
              onClick={this.createSortHandler('calories')}
            >
              Calories
            </TableSortLabel>
          </TableCell>
          <TableCell numeric>
            <TableSortLabel
              active={orderBy === 'fat'}
              direction={order}
              onClick={this.createSortHandler('fat')}
            >
              Fat (g)
            </TableSortLabel>
          </TableCell>
          <TableCell numeric>
            <TableSortLabel
              active={orderBy === 'carbs'}
              direction={order}
              onClick={this.createSortHandler('carbs')}
            >
              Carbs (g)
            </TableSortLabel>
          </TableCell>
          <TableCell numeric>
            <TableSortLabel
              active={orderBy === 'protein'}
              direction={order}
              onClick={this.createSortHandler('protein')}
            >
              Protein (g)
            </TableSortLabel>
          </TableCell>
        </TableRow>
      </TableHead>
    );
  }
}