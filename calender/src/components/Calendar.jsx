import React from "react";
import Event from "./Event";

const Calendar = () => {
    return (
        <div className="Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8 am</td>
                        <Event event='formula feeding' meno='6oz' color='green' />
                        <Event event='diaper changing' color='pink' />
                        <td></td>
                        <Event event='formula feeding' meno='6oz' color='green' />
                        <td></td>
                        <Event event='formula feeding' meno='6oz' color='green' />
                        <Event event='formula feeding' meno='6oz' color='green' />

                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <Event event='formula feeding' meno='7oz' color='green' />
                        <Event event='formula feeding' meno='6oz' color='green' />
                        <Event event='diaper changing' color='pink' />
                        <td></td>
                        <td></td>
                        <Event event='diaper changing' color='pink' />
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <Event event='nape' color='blue' />
                        <td></td>
                        <Event event='diaper changing' color='pink' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <Event event='nape' color='blue' />
                        <td></td>
                        <Event event='formula feeding' meno='6oz' color='green' />
                        <Event event='diaper changing' color='pink' />
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <Event event='formula feeding' meno='6oz' color='green' />
                        <td></td>
                        <Event event='nape' color='blue' />
                        <Event event='nape' color='blue' />
                        <Event event='formula feeding' meno='6oz' color='green' />
                        <Event event='nape' color='blue' />
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <Event event='formula feeding' meno='6oz' color='green' />
                        <Event event='formula feeding' meno='6oz' color='green' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='nape' color='blue' />
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <td></td>
                        <td></td>
                        <Event event='diaper changing' color='pink' />
                        <Event event='formula feeding' meno='6oz' color='green' />
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <Event event='formula feeding' meno='6oz' color='green' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='formula feeding' meno='6oz' color='green' />
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <td></td>
                        <Event event='formula feeding' meno='6oz' color='green' />
                        <Event event='formula feeding' meno='6oz' color='green' />
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='diaper changing' color='pink' />
                    </tr>
                </tbody>
            </table>
        </div>
    )
};

export default Calendar;