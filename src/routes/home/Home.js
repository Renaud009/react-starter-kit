/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import Recharts, {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.scss';

const data = [{name: 'Page A', uv: 590, pv: 800, amt: 1400},
  {name: 'Page B', uv: 868, pv: 967, amt: 1506},
  {name: 'Page C', uv: 1397, pv: 1098, amt: 989},
  {name: 'Page D', uv: 1480, pv: 1200, amt: 1228},
  {name: 'Page E', uv: 1520, pv: 1108, amt: 1100},
  {name: 'Page F', uv: 1400, pv: 680, amt: 1700}];

function Home() {
  console.log("Render ComposedChart");
  return (
    <ComposedChart width={600} height={400} data={data}
                   margin={{top: 20, right: 80, bottom: 20, left: 20}}>
      <XAxis dataKey="name" label="Pages"/>
      <YAxis label="Index"/>
      <Tooltip/>
      <Legend/>
      <CartesianGrid stroke='#f5f5f5'/>
      <Area type='monotone' dataKey='amt' fill='#8884d8' stroke='#8884d8'/>
      <Bar dataKey='pv' barSize={20} fill='#413ea0'/>
      <Line type='monotone' dataKey='uv' stroke='#ff7300'/>
    </ComposedChart>
  );
}

export default withStyles(Home, s);
