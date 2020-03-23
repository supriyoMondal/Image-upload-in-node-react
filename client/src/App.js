import React from 'react';
import './App.css';
import MainComponenet from './components/MainComponenet'
import { registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css';
import FilePondPluginFileEncode from 'filepond-plugin-file-encode';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';

registerPlugin(FilePondPluginImagePreview, FilePondPluginFileEncode);

const App = () => <MainComponenet />

export default App;
