import React from "react";
import { useAppConfigurationModel } from "components/Configuration/appConfigurationM";
import { RecursiveTree } from "components/Configuration/ui-component-tree";
import TreeItem from "components/Configuration/ui-component-tree/TreeNode";
import { Grid, IconButton, Tooltip } from "@mui/material";
import { NoPanArea, Space } from "react-zoomable-ui";
import { useAppStateModel } from "../../control-panel";
import WestIcon from "@mui/icons-material/West";
import EastIcon from "@mui/icons-material/East";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import CenterFocusStrongIcon from "@mui/icons-material/CenterFocusStrong";

export const EditViewConfiguration = () => {
  const { configuration } = useAppConfigurationModel();
  const { showCamera, hideCamera, showHeader, hideSettings, hideComponents } = useAppStateModel();
  const spaceRef = React.useRef<Space | null>(null);

  return (
    <div>
      <Space
        ref={spaceRef}
        onCreate={(vp) => vp.camera.centerFitHorizontalAreaIntoView(0, 900)}
      >
        <NoPanArea id={"zoomFocus"}>
          <Grid style={{padding: "30px", marginBottom: "0px"}}>
            {<div>
             {configuration && (
               <RecursiveTree tree={configuration} template={TreeItem} />
            )}
            </div>}
          </Grid>
        </NoPanArea>
      </Space>
      <div
        style={{
          position: 'absolute',
          left: '2%',
          bottom: '2%',
          width: '130px',
          backgroundColor: '#787777',
          borderRadius: 14,
        }}
      >
        <div>
          <Tooltip title="Показать/Скрыть левую панель">
            <IconButton
              style={{ height: 30, width: 30 }}
              onClick={() => {
                hideComponents();
              }}
            >
             <WestIcon style={{ fill: '#ffffff' }}/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Показать/Скрыть правую панель">
            <IconButton
              style={{ height: 30, width: 30 }}
              onClick={() => {
               hideSettings();
              }}
            >
              <EastIcon style={{ fill: '#ffffff' }}/>
           </IconButton>
          </Tooltip>
          <Tooltip title="Показать/Скрыть панель камеры">
            <IconButton
             style={{ height: 30, width: 30 }}
             onClick={() => {
               hideCamera();
              }}
           >
              <ControlCameraIcon style={{ fill: '#ffffff' }}/>
            </IconButton>
          </Tooltip>
          <Tooltip title="Выровнять по центру">
          <IconButton
            onClick={() => {
              const element = document.getElementById('zoomFocus');
              if (element) {
                spaceRef.current?.viewPort?.camera.centerFitElementIntoView(
                  element,
                  {
                    elementExtraMarginForZoomInClientSpace: 50,
                  },
                  {
                    durationMilliseconds: 800,
                  },
                );
              }
            }}
          >
            <CenterFocusStrongIcon style={{ fill: '#ffffff' }}/>
          </IconButton>
          </Tooltip>
        </div>
      </div>
      {showCamera &&
      <div
        style={{
          position: 'absolute',
          left: '86%',
          bottom: '63%',
        }}
      >
        <div
          style={{
            position: 'relative',
            left: '-50%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#6666',
            padding: 20,
            borderRadius: 14,
          }}
        >
          <div style={{ color: 'white', marginBottom: 5, fontSize: 'small' }}>Управление камерой</div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <button style={buttonStyle} onClick={() => spaceRef.current?.viewPort?.camera.moveBy(0, 0, 0.1)}>
              +
            </button>
            <button style={buttonStyle} onClick={() => spaceRef.current?.viewPort?.camera.moveBy(0, 0, -0.1)}>
              −
            </button>
          </div>
          <div>
            <button
              style={buttonStyle}
              onClick={() =>
                spaceRef.current?.viewPort?.camera.moveBy(0, -100, 0, undefined, undefined, {
                  durationMilliseconds: 500,
                })
              }
            >
              ⇧
            </button>
          </div>
          <div>
            <button style={buttonStyle} onClick={() => spaceRef.current?.viewPort?.camera.moveBy(0, -5)}>
              ↑
            </button>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <button
              style={buttonStyle}
              onClick={() =>
                spaceRef.current?.viewPort?.camera.moveBy(-100, 0, 0, undefined, undefined, {
                  durationMilliseconds: 500,
                })
              }
            >
              ⇦
            </button>
            <button style={buttonStyle} onClick={() => spaceRef.current?.viewPort?.camera.moveBy(-50, 0)}>
              ←
            </button>
            <div style={buttonStyle} />
            <button style={buttonStyle} onClick={() => spaceRef.current?.viewPort?.camera.moveBy(50, 0)}>
              →
            </button>
            <button
              style={buttonStyle}
              onClick={() =>
                spaceRef.current?.viewPort?.camera.moveBy(100, 0, 0, undefined, undefined, {
                  durationMilliseconds: 500,
                })
              }
            >
              ⇨
            </button>
          </div>
          <div>
            <button style={buttonStyle} onClick={() => spaceRef.current?.viewPort?.camera.moveBy(0, 50)}>
              ↓
            </button>
          </div>
          <div>
            <button
              style={buttonStyle}
              onClick={() =>
                spaceRef.current?.viewPort?.camera.moveBy(0, 100, 0, undefined, undefined, {
                  durationMilliseconds: 500,
                })
              }
            >
              ⇩
            </button>
          </div>
        </div>
      </div>}
    </div>
  );
};

const buttonStyle = {
  width: 30,
  height: 30,
  fontSize: 16,
};
