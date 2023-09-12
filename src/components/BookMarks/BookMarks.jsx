import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
const BookMarks = ({bookMarks , readingTime}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 p-5 rounded-lg ml-4 mt-3">
            <div className='bg-gray-200 rounded-lg p-2'>
                <h3 className="text-2xl text-center font-semibold">Reading Time : {readingTime} min</h3>
                <h2 className="text-2xl font-semibold text-center text-red-500">Bookmarked Blogs : {bookMarks.length}</h2>
            </div>
            
            {
                bookMarks.map((bookMark , idx) => <BookMark key={idx} bookMark={bookMark}></BookMark>)
            }
        </div>
    );
};
BookMarks.propTypes = {
    bookMarks : PropTypes.array.isRequired,
    readingTime : PropTypes.number.isRequired
}
export default BookMarks;