import axios from "axios";
import React, { useState } from "react";
import { DateTime } from "luxon";
import { useDownload } from "../../hooks/useDownload";
import { Button, ButtonState } from "./Button";
import { Alert, Container } from "react-bootstrap";
import { DownloadBtn } from "./style";
import { Navigate } from "react-router-dom";
import { IDownloadProps } from "../../interfaces";

function Download(args: IDownloadProps) {
  var path = "/api/Data/mapas/"+ String(args.id) + "/download"
  if(args.downloadType === "publication")
    path = "/api/Data/publications/download/"+ String(args.id)
  
  const DownloadFile: React.FC = () => {
  const [buttonState, setButtonState] = useState<ButtonState>(
    ButtonState.Primary
  );
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const preDownloading = () => setButtonState(ButtonState.Loading);
  const postDownloading = () => setButtonState(ButtonState.Primary);

  const onErrorDownloadFile = () => {
    setButtonState(ButtonState.Primary);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 3000);
  };

  const getFileName = () => {
    if(args.downloadType === "publication")
      return DateTime.local().toISODate() + "-" + String(args.title) + ".pdf";
    return DateTime.local().toISODate() + String(args.id) + ".zip";
  };

  const downloadFile = () => {
    
    return axios.get(
      path,
      {
        responseType: "blob",
         
        headers: {
          authorization: "Bearer " + args.token, // add authentication information as required by the backend APIs.
        }
         
      }
    );
  };

  const { ref, url, download, name } = useDownload({
    apiDefinition: downloadFile,
    preDownloading,
    postDownloading,
    onError: onErrorDownloadFile,
    getFileName,
  });

  return (
    <Container className="mt-5">
      <Alert variant="danger" show={showAlert}>
        <Navigate to='/login'/>
      </Alert>
      <DownloadBtn p={args.pos} l={args.lef}>
      <a href={url} download={name} className="hidden" ref={ref}/>
      <div style={{"marginLeft":"32%"}}>
      <Button label="Download" buttonState={buttonState} onClick={download}/>
      </div>
      </DownloadBtn>
    </Container>
  );
}
return (<DownloadFile/>)
};

export default Download;
