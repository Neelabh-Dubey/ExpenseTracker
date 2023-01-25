import './YearFilter.css';

function YearFilter(props) {

    const onChangeHandler = (evt) =>{
        props.onSelect(evt.target.value);
    }

    return (
        <div className='filter-div'>
            <span>Year</span>
            <select onChange={onChangeHandler} value={props.selected}>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
            </select>
        </div>
    );
}

export default YearFilter;