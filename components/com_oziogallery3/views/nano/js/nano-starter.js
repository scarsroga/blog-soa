<?php
$non_printable_separator="\x16";
?>
jQuery( document ).ready(function( $ ) {
	$("#nanoGallery").nanoGallery({
		locationHash: <?php echo json_encode(intval($this->Params->get("ozio_nano_locationHash", "1"))); ?>,
		viewerDisplayLogo: false,
		//thumbnailHeight può essere anche auto
		thumbnailHeight: <?php echo json_encode( $this->Params->get("ozio_nano_thumbnailHeight_kind","auto")=="fixed"?intval($this->Params->get("ozio_nano_thumbnailHeight", "134")):"auto" ); ?>,
		thumbnailWidth: <?php echo json_encode(intval($this->Params->get("ozio_nano_thumbnailWidth", "200"))); ?>,
		maxItemsPerLine: <?php echo json_encode(intval($this->Params->get("ozio_nano_maxItemsPerLine", "0"))); ?>,
		maxWidth: <?php echo json_encode(intval($this->Params->get("ozio_nano_maxWidth", "0"))); ?>,
		touchAnimation: 1,
		galleryToolbarWidthAligned: <?php echo json_encode(intval($this->Params->get("ozio_nano_galleryToolbarWidthAligned", "1"))); ?>,
		slideshowDelay: <?php echo json_encode(intval($this->Params->get("ozio_nano_slideshowDelay", "3000"))); ?>,
		paginationMaxItemsPerPage: <?php echo json_encode(intval($this->Params->get("ozio_nano_paginationMaxItemsPerPage", "0"))); ?>,
		paginationMaxLinesPerPage: <?php echo json_encode(intval($this->Params->get("ozio_nano_paginationMaxLinesPerPage", "0"))); ?>,
		thumbnailDisplayInterval: 0,
		thumbnailDisplayTransition: 1,
		thumbnailLazyLoad: <?php echo json_encode(intval($this->Params->get("ozio_nano_thumbnailLazyLoad", "1"))); ?>,
		thumbnailLazyLoadTreshold: <?php echo json_encode(intval($this->Params->get("ozio_nano_thumbnailLazyLoadTreshold", "150"))); ?>,

		viewer: <?php echo json_encode( "internal"/*$this->Params->get("ozio_nano_viewer", "internal")*/); ?>,
		thumbnailLabel: <?php echo json_encode(
							array(
									'position'=>$this->Params->get("ozio_nano_thumbnailLabel_position", "overImageOnBottom"),
									'display'=>intval($this->Params->get("ozio_nano_thumbnailLabel_display", "1")),
									'displayDescription'=>intval($this->Params->get("ozio_nano_thumbnailLabel_display", "1")),
									'titleMaxLength'=>intval($this->Params->get("ozio_nano_thumbnailLabel_maxTitle", "25")),
									'descriptionMaxLength'=>intval($this->Params->get("ozio_nano_thumbnailLabel_maxTitle", "25")),
									'hideIcons'=>intval($this->Params->get("ozio_nano_thumbnailLabel_hideIcons", "0")),
									'align'=>$this->Params->get("ozio_nano_thumbnailLabel_align", "left"),
							)); 
						?>,
						
		viewerToolbar: <?php echo json_encode(
							array(
									'position'=>$this->Params->get("ozio_nano_viewerToolbar_position", "bottom"),
									'style'=>$this->Params->get("ozio_nano_viewerToolbar_style", "innerImage"),
							)); 
						?>,
		showInfoBoxButton: <?php echo json_encode(intval($this->Params->get("info_button", "1"))==1); ?>,
		showInfoBoxAlbum: <?php echo json_encode(!intval($this->Params->get("hide_infobox_album", "0"))); ?>,
		showInfoBoxPhoto: <?php echo json_encode(!intval($this->Params->get("hide_infobox_photo", "0"))); ?>,
		showInfoBoxDate: <?php echo json_encode(!intval($this->Params->get("hide_infobox_date", "0"))); ?>,
		showInfoBoxDimensions: <?php echo json_encode(!intval($this->Params->get("hide_infobox_width_height", "0"))); ?>,
		showInfoBoxFilename: <?php echo json_encode(!intval($this->Params->get("hide_infobox_file_name", "0"))); ?>,
		showInfoBoxFilesize: <?php echo json_encode(!intval($this->Params->get("hide_infobox_file_size", "0"))); ?>,
		showInfoBoxCamera: <?php echo json_encode(!intval($this->Params->get("hide_infobox_model", "0"))); ?>,
		showInfoBoxFocallength: <?php echo json_encode(!intval($this->Params->get("hide_infobox_focallength", "0"))); ?>,
		showInfoBoxFNumber: <?php echo json_encode(!intval($this->Params->get("hide_infobox_fstop", "0"))); ?>,
		showInfoBoxExposure: <?php echo json_encode(!intval($this->Params->get("hide_infobox_exposure", "0"))); ?>,
		showInfoBoxISO: <?php echo json_encode(!intval($this->Params->get("hide_infobox_iso", "0"))); ?>,
		showInfoBoxMake: <?php echo json_encode(!intval($this->Params->get("hide_infobox_make", "0"))); ?>,
		showInfoBoxFlash: <?php echo json_encode(!intval($this->Params->get("hide_infobox_flash", "0"))); ?>,
		showInfoBoxViews: <?php echo json_encode(!intval($this->Params->get("hide_infobox_views", "0"))); ?>,
		showInfoBoxComments: <?php echo json_encode(!intval($this->Params->get("hide_infobox_comments", "0"))); ?>,
		showInfoBoxLink: <?php echo json_encode(!intval($this->Params->get("hide_infobox_link", "0"))); ?>,
		showInfoBoxDownload: <?php echo json_encode(!intval($this->Params->get("hide_infobox_download", "0"))); ?>,
				
						
		thumbnailHoverEffect: <?php echo json_encode(implode(',',$this->Params->get("ozio_nano_thumbnailHoverEffect", array("imageOpacity50")))); ?>,
		theme: <?php echo json_encode($this->Params->get("ozio_nano_theme", "clean")); ?>,
		colorScheme: <?php echo json_encode($this->Params->get("ozio_nano_colorScheme", "light")); ?>,
		colorSchemeViewer: <?php echo json_encode($this->Params->get("ozio_nano_colorSchemeViewer", "light")); ?>,

		kind: <?php echo json_encode($this->Params->get("ozio_nano_kind", "picasa")); ?>,
		userID: <?php echo json_encode($this->Params->get("ozio_nano_userID", "110359559620842741677")); ?>,
		displayBreadcrumb: <?php echo json_encode(intval($this->Params->get("ozio_nano_displayBreadcrumb", "1"))); ?>,
		blackList: <?php echo json_encode($this->Params->get("ozio_nano_blackList", "Scrapbook|profil|2013-")); ?>,
		whiteList: <?php echo json_encode($this->Params->get("ozio_nano_whiteList", "")); ?>,
		photoSorting: <?php echo json_encode($this->Params->get("ozio_nano_photoSorting", "standard")); ?>,
		albumSorting: <?php echo json_encode($this->Params->get("ozio_nano_albumSorting", "standard")); ?>,
		<?php
		$kind=$this->Params->get("ozio_nano_kind", "picasa");
		$albumvisibility=$this->Params->get("albumvisibility", "public");
		if ($kind=='picasa' && $albumvisibility=='limited'){
			echo 'album:'.json_encode($this->Params->get("limitedalbum", "")."&authkey=".$this->Params->get("limitedpassword", "")).",\n";
			//echo 'authkey:'.json_encode($this->Params->get("limitedpassword", "")).",\n";
			
		}else{
					
			$albumList=$this->Params->get("ozio_nano_albumList", array());
			if (!empty($albumList) && is_array($albumList) ){
				if (count($albumList)==1){
					list($albumid,$title)=explode($non_printable_separator,$albumList[0]);
					$kind=$this->Params->get("ozio_nano_kind", "picasa");
					if ($kind=='picasa'){
						echo 'album:'.json_encode($albumid).",\n";
					}else{
						echo 'photoset:'.json_encode($albumid).",\n";
					}
				}else{
					$albumTitles=array();
					foreach ($albumList as $a){
						list($albumid,$title)=explode($non_printable_separator,$a);
						$albumTitles[]=$title;
					}
					echo 'albumList:'.json_encode(implode('|',$albumTitles)).",\n";
				}
			}
			
		}
		
		
		?>
		i18n:{
	        'infoBoxPhoto':<?php echo json_encode(JText::_('COM_OZIOGALLERY3_PHOTOINFO_PHOTO_LBL'));?>,
	        'infoBoxDate':<?php echo json_encode(JText::_('COM_OZIOGALLERY3_PHOTOINFO_DATE_LBL'));?>,
	        'infoBoxAlbum':<?php echo json_encode(JText::_('COM_OZIOGALLERY3_PHOTOINFO_ALBUM_LBL'));?>,
	        'infoBoxDimensions':<?php echo json_encode(JText::_('COM_OZIOGALLERY3_PHOTOINFO_DIMENSIONS_LBL'));?>,
	        'infoBoxFilename':<?php echo json_encode(JText::_('COM_OZIOGALLERY3_PHOTOINFO_FILENAME_LBL'));?>,
	        'infoBoxFileSize':<?php echo json_encode(JText::_('COM_OZIOGALLERY3_PHOTOINFO_FILESIZE_LBL'));?>,
	        'infoBoxCamera':<?php echo json_encode(JText::_('COM_OZIOGALLERY3_PHOTOINFO_CAMERA_LBL'));?>,
	        'infoBoxFocalLength':<?php echo json_encode(JText::_('COM_OZIOGALLERY3_PHOTOINFO_FOCALLENGTH_LBL'));?>,
	        'infoBoxExposure':<?php echo json_encode(JText::_('COM_OZIOGALLERY3_PHOTOINFO_EXPOSURE_LBL'));?>,
	        'infoBoxFNumber':<?php echo json_encode(JText::_('COM_OZIOGALLERY3_PHOTOINFO_FSTOP_LBL'));?>,
	        'infoBoxISO':<?php echo json_encode(JText::_('COM_OZIOGALLERY3_PHOTOINFO_ISO_LBL'));?>,
	        'infoBoxMake':<?php echo json_encode(JText::_('COM_OZIOGALLERY3_PHOTOINFO_CAMERAMAKE_LBL'));?>,
	        'infoBoxFlash':<?php echo json_encode(JText::_('COM_OZIOGALLERY3_PHOTOINFO_FLASH_LBL'));?>,
	        'infoBoxViews':<?php echo json_encode(JText::_('COM_OZIOGALLERY3_PHOTOINFO_VIEWS_LBL'));?>,
	        'infoBoxComments':<?php echo json_encode(JText::_('COM_OZIOGALLERY3_PHOTOINFO_COMMENTS_LBL'));?>
	        
	        }				

	});

});
