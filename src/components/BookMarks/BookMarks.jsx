import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';
const BookMarks = ({bookMarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 p-5 rounded-lg ml-4 mt-3">
            <h2 className="text-2xl font-semibold text-center text-red-500">Bookmarked Blogs : {bookMarks.length}</h2>
            {
                bookMarks.map(bookMark => <BookMark key={bookMark.id} bookMark={bookMark}></BookMark>)
            }
        </div>
    );
};
BookMarks.propTypes = {
    bookMarks : PropTypes.array.isRequired
}
export default BookMarks;