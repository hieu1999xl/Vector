import { useEffect, useState } from 'react';
import { NotFound, DataLoading, Pagination } from '../../../components';
import { useSearchParameters } from '../../../hooks';
import * as ManualStyle from './stype'
import { ButtonNormal } from '../../../components';

const ManualUpload = () => {

  const handleChange = () => { }

  return (
    <ManualStyle.SCManualBoxCenter>
      <ManualStyle.SCManualBox>
        <ManualStyle.SCManualText>
          Upload File
        </ManualStyle.SCManualText>
        <ManualStyle.SCManualDrag>
          <ManualStyle.SCManualExcel>
            <img src="../assets/img/manual/excel.png" />
          </ManualStyle.SCManualExcel>
          <ManualStyle.SCManualDragText>
            Drag & Drop Your File Here
          </ManualStyle.SCManualDragText>
          <ManualStyle.SCManualDowload>
            <ManualStyle.SCManualDowloadText>
              Download Manual IST Template
            </ManualStyle.SCManualDowloadText>
            <img src="../assets/img/manual/Group 473.png" height="100%" />
          </ManualStyle.SCManualDowload>
          <ManualStyle.SCManualUpload>
            <ManualStyle.SCManualUploadButton>
              <img src="../assets/img/manual/plus.png" />
            </ManualStyle.SCManualUploadButton>
            <ManualStyle.SCManualUploadText>
              Click here to upload new file
            </ManualStyle.SCManualUploadText>
          </ManualStyle.SCManualUpload>
        </ManualStyle.SCManualDrag>
        <ManualStyle.SCManualUploadBtn>
          <img src="../assets/img/manual/iconmonstr-upload-17.svg" style={{ paddingRight: 12 }} />
          Upload
        </ManualStyle.SCManualUploadBtn>
      </ManualStyle.SCManualBox>
    </ManualStyle.SCManualBoxCenter>

  )
};

export default ManualUpload;
