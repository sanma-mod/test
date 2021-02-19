'use strict';

const outputSelector = document.querySelector('#output_selector');
const playButton = document.querySelector('#play_button');

let outputs = null;

navigator.requestMIDIAccess({sysex: true})
    .then(callSucess,callFail);

function callSucess(midiAccess){
    console.log("CALLED!")
    outputs = midiAccess.outputs;
    for (let output of outputs.values()) {
        const optionEl = document.createElement('option');
        optionEl.text = output.name;   
        optionEl.value = output.id;     
        outputSelector.add(optionEl);
    }
}

function callFail(err){
    console.log(err);
}

playButton.addEventListener('click', () => {
  
    const index = outputSelector.selectedIndex;
    const portId = outputSelector[index].value;

    
    const output = outputs.get(portId);
    console.log(output);
});