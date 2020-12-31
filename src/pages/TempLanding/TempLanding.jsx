import React from 'react'
import * as U from '../../components/TuxComponents/UniversalComponents'


const TempLanding = (props) => {
    return (
        <React.Fragment>
            <U.FlexBox column >
                    <img src='/images/vertical-logo.svg' />
                <U.Normal twenty4 greyed >
                    A new way to help power the UX Learning Experience
                </U.Normal>
                <a href='https://www.thecoop.cc'>
                    <U.WideBtn teal>More Information</U.WideBtn>
                </a>
                <br></br>
                <U.Normal twenty4 greyed>Coming Soon!</U.Normal>
            </U.FlexBox>

        </React.Fragment>
    )
}

export default TempLanding