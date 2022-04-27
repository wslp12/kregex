import { Button } from '@mui/material';
import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Cell from './components/Cell/Cell';
import Grid from './components/Grid';
// import ha from './assets/ha.jpeg';

function App() {
  const [output, setOutput] = useState('변환을 눌러 주세요');

  const convertText = () => {
    const result = (document.getElementById(
      'originText',
    ) as HTMLTextAreaElement)?.value;

    // const ex1 = /(에)\n+(는|도|서)/g;

    // const newLineWord =
    //   '\\?|로|도|은|는|이|가|나|의|어|여|에|데|면|때|서|된|린|월|체|한|을|를|후|히|만|중|고|간|지|될|할|갈|시|기|년|장|무';

    if (result !== undefined) {
      let str = result.replace(/🕔/g, '이');
      str = str.replace(/([^.|을|를])\n+/g, '$1');
      str = str.replace(/ +/g, ' ');
      // str = str.replace(/(에)(서|도|는)(.)/g, '$1$2 $3');
      //   const result2 = result1.replace(newLineRegExp, '$1$2');

      //   const exceptionNewLineWord = new RegExp(`(${newLineWord})\n`, 'g');
      //   const result3 = result2.replace(exceptionNewLineWord, '$1 ');

      setOutput(str);
    }
  };

  return (
    <>
      <Grid gc="1fr 1fr" gr="1fr 10%">
        <Cell
          c="1/2"
          style={{
            boxSizing: 'border-box',
            padding: '13px',
          }}
        >
          <textarea
            name=""
            id="originText"
            style={{
              width: '100%',
              height: '100%',
              padding: '10px',
              margin: 0,
              boxSizing: 'border-box',
              resize: 'none',
            }}
          />
        </Cell>
        <Cell
          c="2/3"
          style={{
            boxSizing: 'border-box',
            padding: '13px',
          }}
        >
          <textarea
            name=""
            id="resultText"
            style={{
              width: '100%',
              height: '100%',
              padding: '10px',
              margin: 0,
              boxSizing: 'border-box',
              resize: 'none',
            }}
            onChange={() => null}
            value={output}
          />
        </Cell>
        <Cell
          c="1/3"
          r="2/3"
          style={{
            boxSizing: 'border-box',
            padding: '13px',
          }}
        >
          <Button
            variant="outlined"
            type="button"
            fullWidth
            style={{ height: '100%' }}
            onClick={() => convertText()}
          >
            변환
          </Button>
        </Cell>
      </Grid>

      <Outlet />
    </>
  );
}

export default App;
