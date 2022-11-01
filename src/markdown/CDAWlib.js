const CDAWlib = `
# CDAWlib
-------

The CDF plotting routines available here underlie the
[CDAWeb](//cdaweb.gsfc.nasa.gov/) software; they are supplied here in a
package of IDL functions and procedures called CDAWlib.

Many functions exist in CDAWlib. We do not specifically call them all
out here but they are all internally documented. The software has been
tested but is not guaranteed to be bug free. We will try to address
problems that you may find. There are two options for getting and
running the software:

​1) Download the [pre-compiled IDL saveset containing
CDAWlib](https://cdaweb.gsfc.nasa.gov/WebServices/REST/spdfcdas.sav)
following the
[instructions](https://cdaweb.gsfc.nasa.gov/WebServices/REST/CdasIdlLibrary.html)

    IDL> restore, 'spdfcdas.sav'

​2) Or, get a copy of the [CDAWlib source
code](https://cdaweb.gsfc.nasa.gov/pub/software/cdawlib/) and follow the
general installation instructions below.

On-line Help
------------

-   [General Installation Instructions](#general)
-   [READ\_MYCDF](#read_mycdf) reads CDFs and returns variables and
    attributes
-   [PLOTMASTER](#plotmaster) plots the data returned by READ\_MYCDF.
-   [LIST\_mystruct](#listmystruct) generates an ASCII listing of an
    ISTP/IACG CDF
-   [IDLmakecdf](#IDLmakecdf) creates ISTP/IACG CDF data files starting
    with a Master CDF
-   [CDFx](//cdaweb.gsfc.nasa.gov/cdfx/) CDF viewing and editing tool

* * * * *

General Installation Instructions
---------------------------------

The steps below outline how to run CDAWlib.

1.  This software is written in IDL and must be run on a machine with an
    IDL licence.
2.  Make sure that you are running X on your local machine and tell the
    computer to send any X-windows output to your X-terminal:

    \> setenv DISPLAY [Ethernet address]:0

3.  Copy the packages of CDAWlib to your directory.
4.  With IDL Version 6.2 and above, please also download the latest CDF/IDL patch available [here](//cdf.gsfc.nasa.gov/) and follow the installation instructions.
    --------------------------------------------------------------------------------------------------------------------------------------------------------------

5.  Set the environment variable IDL\_PATH to include the directories
    where the software is located. Your IDL\_PATH should look something
    like (make sure to include the plus signs "+" before each directory:

    #### IDL\_PATH=+/cdawlib/source:+/usr/local/exelis/idl85/lib:+/usr/local/exelis/idl85

    Which is set on unix with a command like: setenv IDL\_PATH
    +/cdawlib/source:+/usr/local/exelis/idl85/lib:\${IDL\_DIR}

6.  #### NOTICE:

    The CDAWlib software has been extensively tested with IDL versions
    6.3, 8.1, 8.3 and 8.5. Use with other versions of IDL should be
    possible, but please test before depending on it. We welcome
    suggestions and bug reports.

7.  Begin your IDL session:

    idl

8.  To use read\_mycdf, plotmaster or list\_mystruct compile the general
    cdaweb functions. Then follow the instructions in the sections
    below.

         
             IDL>@compile_cdaweb        compile the CDAWlib software (not needed when using IDL save file)

9.  To use IDLmakecdf, you need to compile it separately. Then follow
    the instructions in the sections below.

         
             IDL>@compile_IDLmakecdf    compile IDLmakecdf (not needed when using IDL save file)

10. READ\_MYCDF returns a structure containing data and attributes to
    the IDL command line. To plot the data in the structure "a" you can
    use plotmaster or you can write your own plot routines.

### [Return to top](#CDAWlib)

* * * * *

READ\_MYCDF
-----------

The function READ\_MYCDF reads from one to many variables from one to
many CDF files, and returns all data and metadata for these variables in
a single structure of the form:

> structure\_name.variable\_name.attribute\_name.value

The substructure for each variable will have three fields in addition to
any fields holding any metadata information. These three fields are:
VARNAME, which holds the name of the variable in a case-sensitive
fashion, CDFTYPE, which holds the type of the CDF variable, and DAT,
which holds the actual data values.

When reading more than one CDF, metadata and non-record-varying
variables are only read from the first CDF, only record-varying data is
read from all CDFs.

If an error occurs while reading the CDF(s), a -1 is returned

### Calling Sequence

> Result = READ\_MYCDF(varnames, cdfnames) ; to read specific variables
>
> OR
>
> Result = READ\_MYCDF('',/all, cdfnames) ; to read ALL variables

### Arguments

> **varnames**
>
> A string or string array containing the names of the variables to be
> read from the CDF file(s). If specifying the variable names in a
> single string, then the names should be separated by a comma. NOTE:
> CDF is case sensitive, so the given variable names must be an exact
> match.
>
> **cdfnames**
>
> A string or string array containing the names of the CDF file(s) to be
> read (the CDFs need to be from one data type and in monotonical
> order). If specifying the CDF filenames in a single string, then the
> names should be separated by a comma. NOTE: If reading a file outside
> your current directory, then the full filename, including
> directory/path information, must be provided. All path and file
> information is case-sensitive.

### Keywords

> **ALL**
>
> This keyword has three valid values: 0 - meaning ignore, 1 - meaning
> read all variables (use this option if you don't know the names of the
> variables contained in your CDF file, and 2 - meaning read all
> variables with VAR\_TYPE = "data" and their supporting variables).
>
> **NODATASTRUCT**
>
> If this keyword is set, then the .DAT field will be replaced with a
> field called .HANDLE. The value of this field is a handle\_id where
> the data is located. Using this keyword can result in a performance
> improvement.
>
> **NOQUIET**
>
> Set this keyword to keep from disabling obnoxious warning messages
> from IDL's CDF file access routines.
>
> **TSTART**
>
> String of the form '1996/01/02 12:00:00' or a DOUBLE CDF\_EPOCH time
> that is the desired start time of the data. Data is read between this
> TSTART value and the TSTOP value. Default is the start time of the
> earliest data.
>
> **TSTOP**
>
> String of the form '1996/01/02 12:00:00' or a DOUBLE CDF\_EPOCH time
> that is the desired stop time of the plots. Data is read between the
> TSTART value and this TSTOP value. Default is the stop time of the
> latest data.
>
> **DEBUG**
>
> Set this keyword to turn on some progress messages.

### Example

> 
>
>     a=strarr(2)
>     a[0]='i8_k0_mag_19951008_v01.cdf'
>     a[1]='i8_k0_mag_19951013_v01.cdf'
>     b=read_mycdf('RMS,RMS_p',a)
>     help,/struct,b
>     ** Structure < 4006fca8 >, 4 tags, length=296936, refs=1:
>        RMS             STRUCT    -> < Anonymous > Array(1)
>        RMS_P           STRUCT    -> < Anonymous > Array(1)
>        EPOCH           STRUCT    -> < Anonymous > Array(1)
>        CARTESIAN       STRUCT    -> < Anonymous > Array(1)
>     help,/struct,b.RMS
>     ** Structure < 400cd808 >, 32 tags, length=147488, refs=2:
>        VARNAME         STRING    'RMS'
>        TITLE           STRING    'IMP-8 Magnetic Field'
>        PROJECT         STRING    'ISTP&gtInternational Solar-Terrestrial Physics'
>        DISCIPLINE      STRING    'Space Physics>Magnetospheric Science'
>        SOURCE_NAME     STRING    'IMP-8&gtInterplanetary Monitoring Platform 8'
>        DESCRIPTOR      STRING    'MAG>Magnetic Field Investigation'
>        DATA_TYPE       STRING    'K0&gtKey Parameter'
>        DATA_VERSION    STRING    '1'
>        TEXT            STRING    Array(15)
>        MODS            STRING    Array(19)
>        ADID_REF        STRING    'NSSD0094'
>        LOGICAL_FILE_ID STRING    'I8_K0_MAG_19951008_V01'
>        FIELDNAM        STRING    'Components of RMS of B (GSE)'
>        VALIDMIN        FLOAT     Array(3)
>        VALIDMAX        FLOAT     Array(3)
>        SCALEMIN        FLOAT     Array(3)
>        SCALEMAX        FLOAT     Array(3)
>        UNITS           STRING    'nT'
>        UNIT_PTR        STRING    ''
>        LABLAXIS        STRING    ''
>        LABL_PTR_1      STRING    Array(3)
>        MONOTON         STRING    ''
>        FORMAT          STRING    'F7.3'
>        FORM_PTR        STRING    ''
>        FILLVAL         FLOAT      -1.00000e+31
>        CATDESC         STRING    ''
>        VAR_TYPE        STRING    'data'
>        DICT_KEY        STRING    ''
>        DEPEND_0        STRING    'Epoch'
>        DEPEND_1        STRING    'cartesian'
>        CDFTYPE         STRING    'CDF_REAL4'
>        DAT             FLOAT     Array(3, 12206)

### [Return to top](#CDAWlib)

* * * * *

PLOTMASTER
----------

**Important Note:** In plotting each variable, PLOTMASTER looks for the
associated attribute,
[DISPLAY\_TYPE](//spdf.gsfc.nasa.gov/istp_guide/attributes.html#variable),
and uses the value to determine how to plot the variable. If the
attribute is not present, then PLOTMASTER uses a set of rules to
determine how to plot the variable. For simple scalar variables the
rules work well, but for complex dimensional variables the rules break
down. For ISTP CDF data, we strongly recommend the use of our master
CDFs (containing only the metadata - variable names and attributes) to
be read along with the data. PLOTMASTER will then read the metadata out
of the master CDF (PLOTMASTER reads the metadata only out of the first
CDF of each type) and use that metadata for all decision making.

### [Get Master CDFs](https://cdaweb.gsfc.nasa.gov/pub/software/cdawlib/0MASTERS/)

**Recommendation:** When plotting variables use the /auto keyword (this
turns on autoscaling)!

This function accepts from 1 to 10 structures of the type returned by
[READ\_MYCDF](#read_mycdf), determines the plot type for each variable
in each of the structures, and plots it. Returns a 0 if plotting was
successful, and a -1 if unsuccessful.

### Calling Sequence

> Result = PLOTMASTER(astruct1,[astruct2...astruct10], /keyword)

### Arguments

> **astruct**
> A structure returned by the READ\_MYCDF function. This structure, if
> the call to read\_mycdf was sucessful, will contain many elements
> useful in plotting and listing the data, as well as the data itself.
> Please refer to the description of [READ\_MYCDF](#read_mycdf).

### Keywords

> **XSIZE**
>
> The width of the plot (in pixels). Default for GIF file is 640,
> default for x-windows is 90% of the screen resolution.
>
> **PANEL\_HEIGHT**
>
> The height of each panel (in pixels). Default is 100 pixels.
>
> **TSTART**
>
> String of the form '1996/01/02 12:00:00' or a DOUBLE CDF\_EPOCH time
> that is the desired start time of the plots. Data is clipped or padded
> to conform to this time. Default is the start time of the earliest
> data.
>
> **TSTOP**
>
> String of the form '1996/01/02 12:00:00' or a DOUBLE CDF\_EPOCH time
> that is the desired stop time of the plots. Data is clipped or padded
> to conform to this time. Default is the stop time of the latest data.
>
> **GIF**
>
> Set to send plot(s) to a gif file (must be using IDL 5.3 for the gif
> option), ie. /GIF or GIF=1L. If set a file will be produced in the
> current working directory (see OUTDIR keyword), using the following
> naming conventions: Spacecraft\_instrument\_pid\_\# (see the PID
> keyword for customization). If GIF is not set then the plot(s) will be
> put into an x-window.
>
> **PID**
>
> May be used to customize part of the name of a gif file. The value of
> PID may be either a number or a string and will be inserted in the gif
> file name as follows: Spacecraft\_instrument\_pid\_\#.gif. If GIF is
> not set then the plot(s) will be put into an x-window and this keyword
> is ignored.
>
> **OUTDIR**
>
> This keyword names the output directory where a gif file will be
> placed. If GIF is set but OUTDIR is not, then the gif file will be put
> in the user's current working directory.
>
> **AUTO**
>
> Set this keyword to use autoscaling instead of the variables SCALEMIN
> and SCALEMAX attribute values. The scales will be set to the min and
> max values of the data, after fill values have been filtered from the
> data (see also NONOISE keyword). If the user wishes to modify variable
> scale values for plotting purposes, you may do so by changing the
> appropriate data structure values, ie. struct.variable.scalemin = 0.0.
> Please use great care in modifying the data structures values since
> they will greatly influence what your plots or listings may look like.
>
> **COMBINE**
>
> Set this keyword to ATTEMPT to force all time series and spectrograms
> to be plotted into a single x-window or GIF file. Default is to plot
> each structure in its own x-window/GIF file. PLOTMASTER may override
> this keyword if the plots cannot fit into the limited space of an
> x-window.
>
> **CDAWEB**
>
> Set this keyword to force the margin on the right side of time series
> plots to be 100 pixels. This is the same margin used for spectrograms
> for the color bar. By default, PLOTMASTER will examine the data, and
> if ANY spectrograms will be produced, then it will align the margins
> properly. This keyword is only necessary for use in the CDAWeb system.
>
> **SLOW**
>
> Set this keyword to have spectrogram plotted using the POLYFILL
> method. This method is slower but more accurate than TV (used in the
> QUICK method).
>
> **SMOOTH**
>
> Set this keyword to have spectrogram data reduced prior to plotting.
> This will increase plotting speed significantly.
>
> **QUICK**
>
> Set this keyword to have spectrograms plotted using the TV method.
> This method is very fast, but will produce inaccurate spectrograms if
> scales are non-linear or if fill data or data gaps are present in the
> data.
>
> **NONOISE**
>
> Set this keyword to filter out values outside of 3-sigma from the
> mean. This keyword is applied to timeseries and images plots only at
> this time.
>
> **THUMBSIZE**
>
> Set this to change the "thumbnail" size of each image when plotting a
> series of images. The default is 50w x 62h. 12 pixels is added to the
> height to allow for the time stamps under each image. So, if you
> specify a thumsize of 70 pixels, each will actually be 70x82.
>
> **FRAME**
>
> Used to indicate the frame number within a series of images. If you
> specify FRAME = 2, then plotmaster will produce a "full size" version
> of the 3rd image in a sequence of images .
>
> **DEBUG**
>
> Set this keyword to turn on some progress messages.

### Example

>     ; plot_VLF.pro
>     ;
>
>     ;name of cdf to plot (start with Master CDF)
>     a=strarr(2)
>     a[0]='/home/xfiles/kessel/vlfcdf/hk_h0_vlf_00000000_v01.cdf'
>     a[1]='/home/xfiles/kessel/vlfcdf/hk_h0_vlf_19740816_v01.cdf'
>
>     ; list of variables I want to read from the skeleton table.  Only need some of
>     ; them and only the "data" varaibles. read_myCDF gets all of the associated 
>     ; variables. 
>     x = ['b_spd','e_spd','BAVE','pos_mag','pos_GSM','activity_index']
>
>     buf1 = read_myCDF(x, a,  /DEBUG)
>     ;you could type "help, /struct, buf1" to see what was read...
>     ;** Structure <401d0808>, 10 tags, length=11424, refs=1:
>     ;   B_SPD           STRUCT    ->  Array[1]
>     ;   E_SPD           STRUCT    ->  Array[1]
>     ;   BAVE            STRUCT    ->  Array[1]
>     ;   POS_MAG         STRUCT    ->  Array[1]
>     ;   POS_GSM         STRUCT    ->  Array[1]
>     ;   ACTIVITY_INDEX  STRUCT    ->  Array[1]
>     ;   EPOCH           STRUCT    ->  Array[1]
>     ;   E_FREQ          STRUCT    ->  Array[1]
>     ;   B_FREQ          STRUCT    ->  Array[1]
>     ;   LABEL_MAG_POS   STRUCT    ->  Array[1]
>
>
>     ;pick and choose plots to make. if don't use /GIF, then an x plot is made
>
>     status=plotmaster(buf1,xsize=500,/AUTO)
>     status=plotmaster(buf1,xsize=500,/GIF,OUTDIR='/home/xfiles/kessel/vlfgif/',/AUTO)
>
>     ; if plotting smaller than whole file define tstart and tstop. plotmaster
>     ; can use either Epoch style or single real*8 number
>     tstart = '1974/08/15 20:00:00' 
>     tstop = '1974/08/16 08:00:00' 
>     start = encode_cdfepoch(tstart)
>     stop = encode_cdfepoch(tstop)
>
>     status=plotmaster(buf1,xsize=500,/AUTO,TSTART=tstart, TSTOP=tstop)
>     status=plotmaster(buf1,xsize=500,/AUTO,TSTART=start, TSTOP=stop,$
>     /GIF,OUTDIR='/home/xfiles/kessel/vlfgif/')
>
>     end

### [Return to top](#CDAWlib)

* * * * *

LIST\_mystruct
--------------

PURPOSE: Given a "data structure" read with read\_mycdf, LIST\_mystruct
generates an ascii listing of the data.

### Calling Sequence

> Result =
> LIST\_mystruct(astruct,NOGATT=nogatt,NOVATT=novatt,NORV=norv,\$
> NONRV=nonrv,NO2DRV=no2drv,FILENAME=filename,\$
> TSTART=TSTART,TSTOP=TSTOP,MAXRECS=maxrecs)

### Arguments

> **astruct**
> A structure returned by the READ\_MYCDF function. This structure,if
> the call to read\_mycdf was sucessful, will contain many elements
> useful in plotting and listing the data, as well as the data itself.
> Please refer to the description of [READ\_MYCDF](#read_mycdf).

### Keywords

> **NOGATT**
>
> Global attributes output: =0 (print), =1 (no print)
>
> **NOVATT**
>
> Variable attributes output: =0 (print), =1 (no print)
>
> **NORV**
>
> Record varying output: =0 (print), =1 (no print)
>
> **NONRV**
>
> Non record varying output: =0 (print), =1 (no print)
>
> **NO2DRV**
>
> 2D record varying output: =0 (print), =1 (no print)
>
> **FILENAME**
>
> Output filename.
>
> **MAXRECS**
>
> Maximum records listed.

### Example

> 
>
>     cnames = 'example.cdf'
>     vnames =''
>     a=read_mycdf(vnames, /all, cnames)
>     status=LIST_mystruct(a,TSTART=start, TSTOP=stop, /NOVATT)

### [Return to top](#CDAWlib)

* * * * *

* * * * *

IDLmakecdf
----------

Purpose: To copy a master ISTP/IACG cdf and then read just the data and
support\_data variables from it and create an IDL structure where each
structure tag is the name of a variable. Each variable tag will then
point to a data pointer. This structure is then returned to the user so
that they can fill each data pointer w/ the real data. Once each pointer
is assigned real data, the user should call the write\_data\_to\_cdf
function.

### Calling Sequence

> buf1 = read\_master\_cdf(master\_cdf,out\_cdf)
> RESULT = write\_data\_to\_cdf(out\_cdf, buf1)

### Arguments

> **master\_cdf**
>
> A string containing the name of the master CDF. NOTE: If reading a
> file outside your current directory, then the full filename, including
> directory/path information, must be provided. If running on a UNIX
> system, remember that all path and file information is case-sensitive.
>
> **out\_cdf**
>
> A string containing the name of the CDF file to be output. If
> specifying the CDF filenames in a single string, then the names should
> be separated by a comma. NOTE: If reading a file outside your current
> directory, then the full filename, including directory/path
> information, must be provided. If running on a UNIX system, remember
> that all path and file information is case-sensitive.
>
> **buf1**
>
> An IDL structure holding the names and dimensions of the variables
> associated with the Master CDF.

### Keywords

> **DEBUG**
> Set this keyword to turn on some progress messages.

### Example

>     ; write_vlf.pro
>
>     ; Notes: remove the cdf file if it exists
>     ;$rm hk_h0_vlf_19741027_v01.cdf 
>     ; compile idl module before running this procedure
>     ;.run IDLmakecdf.pro (not needed when using the spdfcdas.sav file)
>     ;instead just restore the save file, e.g. restore, 'spdfcdas.sav'
>
>     ;
>     ; day 300 for 1974 is October 27
>         idl_saveset = 'hk_vlf_74300.idl'
>         out_cdf = 'hk_h0_vlf_19741027_v01.cdf' 
>
>
>     ; read in master cdf skeleton, specify output CDF
>         buf1 = read_master_cdf('hk_h0_vlf_00000000_v01.cdf',$
>         out_cdf)
>
>
>         restore, idl_saveset
>     ;you could type "help, /struct, arec" to see what was read...
>     ;** Structure <400502c8>, 11 tags, length=136, refs=1:
>     ;   EPOCH           DOUBLE       6.2319283e+13
>     ;   SPDE            FLOAT     Array[16]
>     ;   SPDB            FLOAT     Array[8]
>     ;   BAVE            FLOAT           58.0411
>     ;   RE              FLOAT           12.0038
>     ;   MLAT            FLOAT           55.0457
>     ;   MLT             FLOAT           6.07035
>     ;   XGSM            FLOAT          -2.80766
>     ;   YGSM            FLOAT          -6.87608
>     ;   ZGSM            FLOAT           9.43012
>
>
>     ; determine the number of records
>         num_rec = n_elements(arec.epoch)
>
>     :set up arrays
>         Epoch = double(num_rec)
>         espd = fltarr(16,num_rec)
>         bspd = fltarr(16,num_rec)
>         bave = fltarr(num_rec)
>         pos_mag = fltarr(3,num_rec)
>         pos_gsm = fltarr(3,num_rec)
>
>     ; copy values out of idl save set
>         Epoch = arec.EPOCH
>         espd = arec.spde
>         bspd = arec.spdb
>         bave = arec.BAVE
>         pos_mag(0,*) = arec.RE
>         pos_mag(1,*) = arec.MLAT
>         pos_mag(2,*) = arec.MLT
>         pos_gsm(0,*) = arec.XGSM
>         pos_gsm(1,*) = arec.YGSM
>         pos_gsm(2,*) = arec.ZGSM
>
>
>     ;check for zeros in espd, bspd, bave and set to fill value
>         fillvalue = -1e31
>         i = where(espd ge 0)
>         if i[0] ne -1 then espd[i] = fillvalue
>         i = where(bspd ge 0)
>         if i[0] ne -1 then bspd[i] = fillvalue
>         i = where(bave eq 0)
>         if i[0] ne -1 then bave[i] = fillvalue
>
>
>     ; copy processed data to buf1
>         *buf1.Epoch.data = epoch
>         *buf1.E_SPD.data = espd
>         *buf1.B_SPD.data = bspd
>         *buf1.BAVE.data = bave
>         *buf1.pos_mag.data = pos_mag
>         *buf1.pos_GSM.data = pos_gsm
>
>
>     ; write output CDF file
>         stat2 = write_data_to_cdf(out_cdf, buf1)
>
>     end

### [Return to top](#CDAWlib)

[Return to Space Physics Use of CDF](../sp_use_of_cdf.html)

[CDF home page](//cdf.gsfc.nasa.gov/)
`;

export default CDAWlib;