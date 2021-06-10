import React from 'react';
import TrackerItem from './TrackerItem';




function TrackerList( {tracker, setTracker } ) {

    const removeTracker = i => {
        let temp = tracker.filter((v, index) => index != i);
        setTracker(temp);
    }

    const sortByDate = (a, b) => {
        return b.date - a.date;
    }

    return (
        <div className="tracker-list">
            {
                tracker.sort(sortByDate).map((value, index) => (
                    <TrackerItem
                    key={index}
                    tracker={value}
                    index={index}
                    removeTracker={removeTracker}
                    />
                ))
            }
            
        </div>
    );
}

export default TrackerList;