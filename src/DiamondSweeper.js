import React, { Component } from 'react';
var tunedCount = 0;
var dimondFound = 0;
var previewsArrowId = '';
class Sweeper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noOfRowColumn: 8,
            selectedImage: 'iconqestion',
            totalScore: 0,
        }
    }

    scoreCount(randomNo, rowNo, columnNo) {
        let tempRef = rowNo + "_" + columnNo;
        let is_dimondFound = false;
        tunedCount = tunedCount + 1;

        if (randomNo === columnNo) {
            is_dimondFound = true;
            dimondFound = dimondFound + 1;
            document.getElementById(tempRef).classList.remove('IconQuestion');
            document.getElementById(tempRef).classList.add('IconDimond');
        }
        else if (randomNo == columnNo + 1) {
            if (previewsArrowId) {
                document.getElementById(previewsArrowId).classList.remove('iconArrow');
                document.getElementById(previewsArrowId).classList.add('noIcon');
            }
            document.getElementById(tempRef).classList.remove('IconQuestion');
            document.getElementById(tempRef).classList.add('iconArrow');
            previewsArrowId = rowNo + "_" + columnNo;
        }
        else {
            document.getElementById(tempRef).classList.remove('IconQuestion');
            document.getElementById(tempRef).classList.add('noIcon');
        }

        console.log("Untuned Count = ", tunedCount - 64)
        if (dimondFound === 8) {
            this.setState({
                totalScore: 64 - tunedCount,
            })
        }
    }



    render() {
        const { noOfRowColumn, totalScore } = this.state;

        let tableColumn = [];
        let tableRows = [];

        for (var i = 0; i < noOfRowColumn; i++) {

            tableColumn = [];
            let randomNumber = Math.floor(Math.random() * 8);
            // console.log(i, "====>", randomNumber);
            for (var j = 0; j < noOfRowColumn; j++) {
                // console.log(i, j, "====>", randomNumber);
                tableColumn.push(<td id={i + "_" + j} className="table-cell IconQuestion" key={i + '_' + j}
                    onClick={this.scoreCount.bind(this, randomNumber, i, j)}
                >
                    <div className='icon' > </div> </td>)
            }

            tableRows.push(<tr className="table-row" key={i}> {tableColumn} </tr>)
        }

        return (
            <div className="game">

                <table align="center">
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
                {totalScore > 0 ?
                    <div className="total-score">
                        <span> The number of squares still left unturned : {totalScore}</span>
                    </div>
                    : ''
                }

            </div >

        )

    }
}
export default Sweeper;