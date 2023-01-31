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
          <ManualStyle.SCManualDragText>
            Drag & Drop Your File Here
          </ManualStyle.SCManualDragText>
          <ManualStyle.SCManualDowload>
            <ManualStyle.SCManualDowloadText>
              Download Manual IST Template
            </ManualStyle.SCManualDowloadText>
          </ManualStyle.SCManualDowload>
          <ManualStyle.SCManualUpload>
            <ManualStyle.SCManualUploadButton>
              +
            </ManualStyle.SCManualUploadButton>
            <ManualStyle.SCManualUploadText>
              Click here to upload new file
            </ManualStyle.SCManualUploadText>
          </ManualStyle.SCManualUpload>
        </ManualStyle.SCManualDrag>
        <ManualStyle.SCManualUploadBtn>
          Upload
        </ManualStyle.SCManualUploadBtn>
      </ManualStyle.SCManualBox>
    </ManualStyle.SCManualBoxCenter>

  )
};

export default ManualUpload;
