---
title: "Requirements for Data Delivery"
date: 2022-03-14T08:38:44-04:00
---

**Requirements for Data Delivery to the  
Heliophysics Archives (SPDF and SDAC) for New Missions**


------------------------------------------------------------------------------------------------

NASA-sponsored data and metadata are archived at two Heliophysics archives:

*   [Solar Data Analysis Center (SDAC)](https://umbra.nascom.nasa.gov/) for solar data, and
*   [Space Physics Data Facility (SPDF)](https://spdf.gsfc.nasa.gov) for non-solar data,

both at NASA Goddard Space Flight Center.

The charter for the archives is the accurate and complete capture, long-term preservation, and long-term accessibility of heliophysics data from NASA-funded missions, plus select non-NASA data important to NASA heliophysics strategic science objectives. The priority of these requirements is to facilitate the creation of higher-level and more generally useful digital data products, in fully calibrated physical units at high-time resolution, that are fully described and suitable for scientific analysis and publication in the far future. It is NASA’s policy to optimize for ease of accessibility and use of NASA-funded data and publications, including long-term stewardship. Data provided by the missions and made available through NASA’s heliophysics archives should follow the FAIR (findable, accessible, interoperable, reusable) data principles. The archives also welcome long-term valid and useful supplemental summary graphics and other products. The archives shall work directly with flight missions and instrument teams as early as reasonable (pre Phase C) to ensure a good proper mutual understanding of what data should be archived, and when and how such data can best be submitted. The archives should be involved in the design of mission Project Data Management Plans (PDMP).

While these archives have been flexible about the data formats and standards they have accepted, new missions are required to meet modern standards and conventions as outlined below. This is a shared responsibility of the data providers and archives.

The collection of archived data collections for a mission shall comprehensively encompass the full scientific potential of the mission in fully calibrated geophysical units (at full resolutions and with accompanying documentation and complete metadata) suitable for data analysis and publication by future scientists outside the mission team, without requiring the use of mission-specific software to read and use the data. The data files shall be delivered to the appropriate archive as they are produced and made public, rather than waiting until the end of the mission. NASA missions are also required to archive their telemetry at the highest level that has not been irreversibly changed (usually called level-0) as federal records, with documentation on its layout and use.

The data shall be provided in one of these self-describing scientific data formats:

*   [Common Data Format (CDF)](https://cdf.gsfc.nasa.gov/),
*   [FITS](https://fits.gsfc.nasa.gov/),
*   [netCDF4-Classic](https://www.unidata.ucar.edu/software/netcdf/), and adding the string data variable type, and using time as the unlimited dimension, but not including groups, unsigned 64-bit integers, or user-defined variable types.

The data files shall contain fully compliant metadata and organization following the [HPDE Data File Internal Metadata (previously ISTP) Guidelines](https://spdf.gsfc.nasa.gov/sp_use_of_cdf.html) or [FITS standards](https://fits.gsfc.nasa.gov/fits_conventions.html), as appropriate.

Data that are difficult to read by the community, or have non-standard components in any way, are barriers to the scientific success of a mission and are not suitable for archiving.

Data providers shall work with the SPASE Metadata Working Team (SMWT) in creating Space Physics Archive Search and Extract (SPASE ) records for the data collections. The SPASE records are used to populate the [Heliophysics Data Portal](https://heliophysicsdata.gsfc.nasa.gov/) as a discipline-wide data registry, and will be used to create Digital Object Identifiers (DOIs) for the data collections, that can be cited in science papers.

Submissions shall also provide all additional descriptions of the instrument, data collections and processing (particularly algorithms) necessary to make the data fully understandable for long-term and correct use by non-experts.

Data products and their purpose shall be clearly described. Missions often apply different levels of processing to the same original data. The steps in creating each level of data product shall be clearly documented and fully described to ensure that data products are understandable and reproducible after the mission ends. The definitions of levels should be consistent for all instrument suites of the same mission.

Documentation shall be in formats that are widely-used and actively maintained (e.g., ASCII text and PDF), with free and open-source definitions, and free and open-source file reading/writing software support. Source files that compile to documentation can be provided (e.g., .tex files) but the compiled, readable documentation must also be provided in standard formats.

Many missions now develop data analysis software (including web applications) that help them browse, understand and analyze their data. However, relying on this software after a mission is completed is not suitable for widespread and future use, and long-term archiving. Therefore, data expressed in fully calibrated geophysical units shall also be produced and archived. Open source data analysis software can be classed as documentation and archived.

Exceptions to these requirements (and those below) may be appropriate for specific missions and data collections and should be negotiated with the archives and NASA HQ.

Additional information are at [NASA Heliophysics Data](https://science.nasa.gov/heliophysics/heliophysics-data) and in the [Data Management Plan (DMP) instructions](https://science.nasa.gov/heliophysics/heliophysics-data-datamanagementplantemplate).

SPDF-specific requirements


----------------------------

The [SPDF Data Ingest Policy](https://spdf.gsfc.nasa.gov/submitting_data.html) calls for providing data in CDFs or netCDFs with HPDE Data File Internal Metadata Guidelines metadata, with enough documentation to make them fully usable for science analysis and publication in the long term.

Data files should pass the [SKTeditor](https://spdf.gsfc.nasa.gov/skteditor/) verification tool (including its command line checker), with some warnings and notices allowed. Mission-specific requirements are also supported by this tool.

SPDF has accumulated extensive data expertise including CDF layout and HPDE Data File Internal Metadata and SPASE metadata, and in various types of instrument output as physical quantities and their scientific meaning. Thus, providers of data to SPDF shall obtain feedback from SPDF when developing new data collections and coordinate with SPDF on data collection structure, metadata, naming and delivery methods (including automated transfers where possible). Later changes to metadata and additions for improving use by generic tools such as CDAWeb, Autoplot, and SPEDAS can be added to master CDFs which can override the metadata in the data CDFs.

Data collection naming and file naming should follow the [SPDF recommended dataset and file naming practices](https://spdf.gsfc.nasa.gov/guidelines/filenaming_recommendations.html), so that future users will be able to easily distinguish between data collections and find the data they are interested in.

Data in the SPDF archive are generally available via HTTPS/FTPS file retrieval, software-based web services in various forms (including HAPI, CSV, JSON, XML, and CDFs), and browser-based user interfaces such as CDAWeb and Autoplot.

SDAC-specific requirements


----------------------------

The SDAC stores data in the [FITS format](https://fits.gsfc.nasa.gov/fits_standard.html), as used in astronomy and in solar physics. Data shall be provided to SDAC in FITS files with complete metadata in compliance with the FITS standard. The use of other file formats is discouraged.

Each file shall pass a [FITS file verification program](https://fits.gsfc.nasa.gov/fits_verify.html). FITS keyword/value pairs shall follow international standards where appropriate, including [FITS Conventions](https://fits.gsfc.nasa.gov/fits_conventions.html). Mission specific FITS keywords and their values shall comply with the FITS standard and should be defined and justified by the mission. The FITS file shall have an identifier that uniquely identifies the file. The level of data processing shall be clearly identified in the FITS file header. Values to FITS keywords shall be internally consistent. For example, if the position in space of the observatory is defined relative to multiple coordinate systems, then that spatial position should be the same regardless of the coordinate system.

FITS file names shall follow a described naming convention and be descriptive and easy for a human to understand. The naming convention shall include the name of the mission and the instrument that took the observation, the nature of the observation and a time that indicates when the observation was made. It is recommended that times expressed in FITS file names follow ISO-8601 standard, for example YYYYMMDDThhmmss. The naming convention shall also include the level of data product, as defined by the mission. The FITS file name shall end in the file extension “.fits”. Exceptions to these requirements shall be negotiated with the SDAC and documented.

Data in SDAC are primarily available via the Virtual Solar Observatory (VSO), which enables the search and download of data from multiple geographically dispersed and heterogeneous data providers, including the SDAC. A description of data products in terms of the [VSO data model](https://docs.virtualsolar.org/wiki/DataModel18) is required in order to provide the accessibility of mission data via the VSO. For more information, see [VSO data providers](https://docs.virtualsolar.org/wiki/NewDataProvider).

* * *

Document Version 1.0  
Original: 2019 November 13 by Robert Candey