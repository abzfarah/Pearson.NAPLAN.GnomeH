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
              active={orderBy === 'userName'}
              direction={order}
              onClick={this.createSortHandler('userName')}
            >
              User ID
            </TableSortLabel>
          </TableCell>
          <TableCell numeric>
            <TableSortLabel
              active={orderBy === 'centreName'}
              direction={order}
              onClick={this.createSortHandler('centreName')}
            >
              School Name
            </TableSortLabel>
          </TableCell>
          <TableCell numeric>
            <TableSortLabel
              active={orderBy === 'role'}
              direction={order}
              onClick={this.createSortHandler('role')}
            >
              Role
            </TableSortLabel>
          </TableCell>
          <TableCell numeric>
            <TableSortLabel
              active={orderBy === 'sectors'}
              direction={order}
              onClick={this.createSortHandler('sectors')}
            >
              Sector
            </TableSortLabel>
          </TableCell>
          <TableCell numeric>
            <TableSortLabel
              active={orderBy === 'centreCode'}
              direction={order}
              onClick={this.createSortHandler('centreCode')}
            >
              School Code
            </TableSortLabel>
          </TableCell>
        </TableRow>
      </TableHead>
    );
  }
}