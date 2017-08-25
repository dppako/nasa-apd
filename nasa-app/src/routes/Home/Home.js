import React from 'react';
import { connect } from 'react-redux';
import DayPicker from 'react-day-picker';
import actions from '../../actions';
import ImageCard from '../../components/ImageCard/ImageCard';
import 'react-day-picker/lib/style.css';

export class Home extends React.Component {
  state = {
    selectedDate: ''
  }

  static defaultProps = {
    match: {
      params: []
    },
    getImage: () => {},
    images: {}
  };

  componentWillMount() {
    this.props.getImage(this.getDateParam(this.props));
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location !== this.props.location) {
      this.props.getImage(this.getDateParam(nextProps));
    }
  }

  getDateParam(props) {
    return props ? props.match.params[0] : null;
  }

  getImageData() {
    const { images } = this.props;
    const dataParam = this.getDateParam(this.props)
    return dataParam
      ? images[dataParam]
      : images.today;
  }

  handleCustomDate = (date) => {
    const newDate = new Date(date);
    const day = newDate.getDate();
    const leadingZeroDay = day < 10 ? '0' + day : day    
    const month = newDate.getMonth() + 1;
    const leadingZeroMonth = month < 10 ? '0' + month : month
    const year = newDate.getFullYear();
    const selectedDate = `${year}-${leadingZeroMonth}-${leadingZeroDay}`;

    this.setState({ selectedDate })
    this.props.history.push(`/${selectedDate}`);
  }

  render() {
    const imageData = this.getImageData();
    const selectedDate = new Date(this.state.selectedDate);

    return (
      this.props.isReady
      ? <section>
          <ImageCard imageData={imageData} />
          <h2 className='siimple-h4'>Select a custom date:</h2>
          <DayPicker onDayClick={this.handleCustomDate} selectedDays={selectedDate} />
        </section>
      : <section>
          <p className='siimple-p'>loading...</p>
        </section>
    );
  }
}

const mapStateToProps = state => ({
  images: state.images.collection,
  isReady: state.images.isReady
});


const mapDispatchToProps = dispatch => ({
  getImage: date => {
    dispatch(actions.getImage(date));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);