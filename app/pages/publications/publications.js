angular.module('publications', []).controller('PublicationsController', ['$scope', '$element', function($scope, $element) {

    $scope.getPubMedUrl = function(pubMedId) {
        return 'http://www.ncbi.nlm.nih.gov/pubmed/' + pubMedId;
    };

    $scope.getPubMedRelatedUrl = function(pubMedId) {
        return 'http://www.ncbi.nlm.nih.gov/pubmed' +
            '?Db=pubmed' +
            '&DbFrom=pubmed&Cmd=Link' +
            '&LinkName=pubmed_pubmed' +
            '&IdsFromResult=' + pubMedId +
            '&ordinalpos=1' +
            '&itool=EntrezSystem2.PEntrez.Pubmed.Pubmed_ResultsPanel.Pubmed_DiscoveryPanel.Pubmed_Discovery_RA' +
            '&log$=relatedarticles' +
            '&logdbfrom=pubmed';
    };

    //$scope.getPubMedCitedByUrl = function(pubMedId) {
    //    return 'http://www.pubmedcentral.nih.gov/' +
    //        'tocrender.fcgi' +
    //        '?artid=' + pubMedId +
    //        '&action=cited';
    //};

    $scope.getGoogleScholarRelatedUrl = function(pubMedId) {
        var pubMedUrl = $scope.getPubMedUrl(pubMedId);
        return 'https://scholar.google.com/scholar?q=related:' + pubMedUrl;
    };

    $scope.getGoogleScholarCitedByUrl = function(pubMedId) {
        var pubMedUrl = $scope.getPubMedUrl(pubMedId);
        return 'https://scholar.google.com/scholar?hl=en&lr=&cites=' + pubMedUrl;
    };

    $scope.publications = [
        {
            title: 'Morphine Regulated Synaptic Networks Revealed by Integrated Proteomics and Network Analysis.',
            journal: 'Molecular & cellular proteomics : MCP. 2015 Oct; 14 (10) :2564-76',
            authors: 'Stockton Jr, Steven D; Gomes, Ivone; Liu, Tong; Moraje, Chandrakala; Hipólito, Lucia; Jones, Matthew R; Ma\'ayan, Avi; Morón, Jose A; Li, Hong; Devi, Lakshmi A',
            pubMedId: 26149443,
            year: 2015
        },
        {
            title: 'GEO2Enrichr: browser extension and server app to extract gene sets from GEO and analyze them for biological functions.',
            journal: 'Bioinformatics (Oxford, England). 2015 Sep 15; 31 (18) :3060-2',
            authors: 'Gundersen, Gregory W; Jones, Matthew R; Rouillard, Andrew D; Kou, Yan; Monteiro, Caroline D; Feldmann, Axel S; Hu, Kevin S; Ma\'ayan, Avi',
            pubMedId: 25971742,
            year: 2015
        },
        {
            title: 'An Integrated Transcriptome Atlas of Embryonic Hair Follicle Progenitors, Their Niche, and the Developing Skin.',
            journal: 'Developmental cell. 2015 Sep 14; 34 (5) :577-91',
            authors: 'Sennett, Rachel; Wang, Zichen; Rezza, Amélie; Grisanti, Laura; Roitershtein, Nataly; Sicchio, Cristina; Mok, Ka Wai; Heitman, Nicholas J; Clavel, Carlos; Ma\'ayan, Avi; Rendl, Michael',
            pubMedId: 26256211,
            year: 2015
        },
        {
            title: 'Reprint of \'Abstraction for data integration: Fusing mammalian molecular, cellular and phenotype big datasets for better knowledge extraction\'.',
            journal: 'Computational biology and chemistry. 2015 Aug 18;',
            authors: 'Rouillard, Andrew D; Wang, Zichen; Ma\'ayan, Avi',
            pubMedId: 26297300,
            year: 2015
        },
        {
            title: 'Abstraction for data integration: Fusing mammalian molecular, cellular and phenotype big datasets for better knowledge extraction.',
            journal: 'Computational biology and chemistry. 2015 Jun 10; 58 :104-119',
            authors: 'Rouillard, Andrew D; Wang, Zichen; Ma\'ayan, Avi',
            pubMedId: 26101093,
            year: 2015
        },
        {
            title: 'Genomic and network patterns of schizophrenia genetic variation in human evolutionary accelerated regions.',
            journal: 'Molecular biology and evolution. 2015 May; 32 (5) :1148-60',
            authors: 'Xu, Ke; Schadt, Eric E; Pollard, Katherine S; Roussos, Panos; Dudley, Joel T',
            pubMedId: 25681384,
            year: 2015
        },
        {
            title: 'Genome-wide significant loci: how important are they? Systems genetics to understand heritability of coronary artery disease and other common complex disorders.',
            journal: 'Journal of the American College of Cardiology. 2015 Mar 3; 65 (8) :830-45',
            authors: 'Björkegren, Johan L M; Kovacic, Jason C; Dudley, Joel T; Schadt, Eric E',
            pubMedId: 25720628,
            year: 2015
        },
        {
            title: 'REDD1 functions at the crossroads between the therapeutic and adverse effects of topical glucocorticoids.',
            journal: 'EMBO molecular medicine. 2015 Jan; 7 (1) :42-58',
            authors: 'Baida, Gleb; Bhalla, Pankaj; Kirsanov, Kirill; Lesovaya, Ekaterina; Yakubovskaya, Marianna; Yuen, Kit; Guo, Shuchi; Lavker, Robert M; Readhead, Ben; Dudley, Joel T; Budunova, Irina',
            pubMedId: 25504525,
            year: 2015
        },
        {
            title: 'Dynamics of the discovery process of protein-protein interactions from low content studies.',
            journal: 'BMC systems biology. 2015; 9 :26',
            authors: 'Wang, Zichen; Clark, Neil R; Ma\'ayan, Avi',
            pubMedId: 26048415,
            year: 2015
        },
        {
            title: 'Drug/Cell-line Browser: interactive canvas visualization of cancer drug/cell-line viability assay datasets.',
            journal: 'Bioinformatics (Oxford, England). 2014 Nov 15; 30 (22) :3289-90',
            authors: 'Duan, Qiaonan; Wang, Zichen; Fernandez, Nicolas F; Rouillard, Andrew D; Tan, Christopher M; Benes, Cyril H; Ma\'ayan, Avi',
            pubMedId: 25100688,
            year: 2014
        },
        {
            title: 'A blueprint of cell identity.',
            journal: 'Nature biotechnology. 2014 Oct; 32 (10) :1007-8',
            authors: 'Ma\'ayan, Avi; Duan, Qiaonan',
            pubMedId: 25299921,
            year: 2014
        },
        {
            title: 'Lean Big Data integration in systems biology and systems pharmacology.',
            journal: 'Trends in pharmacological sciences. 2014 Sep; 35 (9) :450-60',
            authors: 'Ma\'ayan, Avi; Rouillard, Andrew D; Clark, Neil R; Wang, Zichen; Duan, Qiaonan; Kou, Yan',
            pubMedId: 25109570,
            year: 2014
        },
        {
            title: 'LINCS Canvas Browser: interactive web app to query, browse and interrogate LINCS L1000 gene expression signatures.',
            journal: 'Nucleic acids research. 2014 Jul; 42 (Web Server issue) :W449-60',
            authors: 'Duan, Qiaonan; Flynn, Corey; Niepel, Mario; Hafner, Marc; Muhlich, Jeremy L; Fernandez, Nicolas F; Rouillard, Andrew D; Tan, Christopher M; Chen, Edward Y; Golub, Todd R; Sorger, Peter K; Subramanian, Aravind; Ma\'ayan, Avi',
            pubMedId: 24906883,
            year: 2014
        },
        {
            title: 'Histone H3.3 and its proteolytically processed form drive a cellular senescence programme.',
            journal: 'Nature communications. 2014; 5 :5210',
            authors: 'Duarte, Luis F; Young, Andrew R J; Wang, Zichen; Wu, Hsan-Au; Panda, Taniya; Kou, Yan; Kapoor, Avnish; Hasson, Dan; Mills, Nicholas R; Ma\'ayan, Avi; Narita, Masashi; Bernstein, Emily',
            pubMedId: 25394905,
            year: 2014
        }
    ];
}]);