const Filter = ({ filter, handleFilterChange }) => {

    return (
        <div>
            filter shown with
            <input
                type="text"
                placeholder="search"
                value={filter}
                onChange={handleFilterChange}
            />
        </div>
    )
}

export default Filter