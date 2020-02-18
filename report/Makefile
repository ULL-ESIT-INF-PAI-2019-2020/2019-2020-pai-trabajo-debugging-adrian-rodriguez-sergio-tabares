# -----------------------
# Informe para un Trabajo de PAI
#  
#
# by Francisco de Sande <fsande@ull.es>
# date: 11.03.2011
# ---

LATEX    = latex
BIBTEX   = bibtex
PDFLATEX = pdflatex
L2HTML   = latex2html
DVIPS    = dvips
BASURA   = *.dvi *.bbl *.aux *.toc *.lof *.lot *.lol *.log *.blg *.out *.brf *~ *.pdf *.ps *.backup *.pdf.old

MASTER   = reportPAI.tex
SRC      =                 \
						Preface.tex 	 \
						Cap1_Title.tex \
						Cap2_Title.tex \
						Cap3_Title.tex \
						Cap4_Title.tex \
						Cap5_Title.tex \

DVI = $(MASTER:.tex=.dvi)
BIB = $(MASTER:.tex=.bib)
PS  = $(MASTER:.tex=.ps)
PDF = $(MASTER:.tex=.pdf)
MASTERSIN =  $(MASTER:.tex=)

all: 
	$(MAKE) pdf

HTML: $(PDF)
	$(L2HTML) -dir HTML -split 4 -local_icons -long_titles 20 $(MASTER)

pdf: $(MASTER) $(SRC)
	$(PDFLATEX) $(MASTER) && $(MAKE) bib && $(PDFLATEX) $(MASTER) && $(PDFLATEX) $(MASTER)

ps: $(MASTER) $(SRC) $(DVI)
	$(DVIPS) -o $(PS) $(DVI)

bib: bibliografia.bib
	$(BIBTEX) $(MASTERSIN)

$(DVI): $(MASTER) $(SRC)
	$(LATEX) $(MASTER); $(MAKE) bib; $(LATEX) $(MASTER); $(LATEX) $(MASTER)   

clean:
	$(RM) *.dvi *.bbl *.aux *.toc *.lof *.lot *.log *.blg *.lol *.brf *~ *.out HTML/*

del:
	$(RM) -R $(BASURA);
	cd bibliografia;    $(RM) -R $(BASURA);  \
	cd ../capitulos;    $(RM) -R $(BASURA);  \
	cd ../previo;       $(RM) -R $(BASURA);  \

mrproper:
	$(MAKE) del

#.SUFFIXES: .tex .dvi. .ps .pdf
#
#%.dvi: %.tex
#	$(LATEX) $(SRC)
#
# end
# --
