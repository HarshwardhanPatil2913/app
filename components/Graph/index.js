import * as React from 'react';
import  Plot  from 'react-plotly.js'
import styles from '../../styles/graph.module.css';
import PropTypes from 'prop-types';


const Graph=(props)=>{
    const { color, productName, currentLevel, type } = props;
 return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Plot
                data={[
                    {
                            values: [80,100-80],
                            hole: .7,
                            type: 'pie',
                            textinfo: 'none',
                            marker: {'colors':['#efcc0d','#fafad2']},
                            hoverinfo: 'none',
                            
                    },
                ]}
                    layout={ {
                        title: "<b>Smart Lava Yellow</b>",
                        
                        titlefont:{
                            size:14,
                            family: 'Arial, Helvetica, sans-serif',
                            color: "#434343",
                            
                        },
                        
                        annotations: [
                            {
                            font: {
                                size: 8,
                                
                            },
                            showarrow: false,
                            text: "Remaining <br><b>2671</b><br>Applicatons",
                            align: 'center',
                            font:{
                                size:12,
                               
                            },
                            showlegend:false,
                            
                            }
                        ],
                        showlegend: false,
                        width: 170, 
                        height: 170,
                        autosize:false,
                            margin:{
                                t:50,
                                b:0,
                                r:0,
                                l:0,
                            
                            },
                            
                        
                        
                       
                    } }
                />
                <p className={styles.para}><b>60%</b>Tank Size</p>
             </div>
             
        </div>
      );
    }

Graph.propTypes = {
        id: PropTypes.number.isRequired,
        color: PropTypes.string.isRequired,
        productName: PropTypes.string.isRequired,
        currentLevel: PropTypes.number.isRequired,
        floorStock: PropTypes.number.isRequired,
};
export default Graph;